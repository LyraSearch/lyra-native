import {
  ScrollView,
  Switch,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';
import {useEffect, useState} from 'react';
import {create, formatNanoseconds, insert, search} from '@lyrasearch/lyra';
import dataset from './events';
import theme from './theme.style';
import common from './common.style';
import createStyles from './lyra-demo.component.style';

type Event = {
  description: string;
  date: string;
  granularity: string;
  category1: string;
  category2: string;
};

type Result = {
  count: number;
  events: Event[];
};

type Response = {
  result: Result;
};

const r = dataset as Response;

type Hit = {
  description: string;
  date: string;
  granularity: string;
  categories: {
    category1: string;
    category2: string;
  };
};

type SearchResult = {
  count: number;
  hits: Hit[];
  elapsed: bigint;
};

const db = create({
  schema: {
    date: 'string',
    description: 'string',
    categories: {
      category1: 'string',
      category2: 'string',
    },
    granularity: 'string',
  },
});

function formatYear(date: string) {
  if (date.startsWith('-')) {
    return date.slice(1) + ' BC';
  }

  return date;
}

function formatNumber(number: number) {
  return number.toLocaleString();
}

function LyraDemo() {
  const [indexing, setIndexing] = useState(r.result.events.length);
  const [term, setTerm] = useState('');
  const [exact, setExact] = useState(false);
  const [limit, setLimit] = useState(5);
  const [offset, setOffset] = useState(0);
  const [tolerance, setTolerance] = useState(0);
  const [results, setResults] = useState<SearchResult | undefined>(null);

  useEffect(() => {
    function addDocuments() {
      // We use Random here just to show a nice UI to the user
      const batch = r.result.events.splice(
        0,
        300 + Math.floor(Math.random() * 1000),
      );

      if (batch.length === 0) {
        setIndexing(0);
        return;
      }

      for (const data of batch) {
        insert(db, {
          date: data.date,
          description: data.description,
          categories: {
            category1: data.category1,
            category2: data.category2,
          },
          granularity: data.granularity,
        });
      }

      setIndexing((indexing) => indexing - batch.length);
      requestAnimationFrame(addDocuments);
    }

    addDocuments();
  }, []);

  useEffect(() => {
    if (!term) {
      setResults(null);

      return;
    }

    setResults(
      search(db, {
        term,
        limit,
        offset,
        exact,
        tolerance,
      }),
    );
  }, [term, limit, offset, exact, tolerance]);

  const dimensions = useWindowDimensions();
  const styles = createStyles(dimensions);

  if (indexing > 0) {
    return (
      <View style={{alignSelf: 'center'}}>
        <Text style={common.headingText}>
          Indexing <Text style={common.textBold}>{formatNumber(indexing)}</Text>{' '}
          events
        </Text>
        <Text style={common.text}>We will get back to you shortly ...</Text>
      </View>
    );
  }

  return (
    <View style={{flexGrow: 1, flexShrink: 1}}>
      <View style={styles.searchForm}>
        <View style={styles.searchFormSection}>
          <View style={styles.searchFormControl}>
            <View style={styles.searchFormLabel}>
              <Text style={styles.searchFormTitle}>Term</Text>
            </View>
            <TextInput
              style={styles.searchFormTextInput}
              value={term}
              onChangeText={setTerm}
              placeholder="Type a search term here..."
            />
          </View>
        </View>

        <View style={styles.searchFormSection}>
          <View style={styles.searchFormControl}>
            <View style={styles.searchFormLabel}>
              <Text style={styles.searchFormTitle}>Exact</Text>
            </View>

            <View style={styles.searchFormSwitch}>
              <Switch
                style={styles.searchFormSwitchInput}
                value={exact}
                onValueChange={setExact}
              />
            </View>
          </View>
          <View style={styles.searchFormControl}>
            <View style={styles.searchFormLabel}>
              <Text style={styles.searchFormTitle}>Limit</Text>
            </View>
            <TextInput
              style={styles.searchFormNumberInput}
              value={`${Number.isInteger(limit) ? limit : ''}`}
              onChangeText={(text) => {
                setLimit(Number.parseInt(text, 10));
              }}
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.searchFormControl}>
            <View style={styles.searchFormLabel}>
              <Text style={styles.searchFormTitle}>Offset</Text>
            </View>
            <TextInput
              style={styles.searchFormNumberInput}
              value={`${Number.isInteger(offset) ? offset : ''}`}
              onChangeText={(text) => {
                setOffset(Number.parseInt(text, 10));
              }}
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.searchFormControl}>
            <View style={styles.searchFormLabel}>
              <Text style={styles.searchFormTitle}>Typo tolerance</Text>
            </View>
            <TextInput
              style={styles.searchFormNumberInput}
              value={`${Number.isInteger(tolerance) ? tolerance : ''}`}
              onChangeText={(text) => {
                setTolerance(Number.parseInt(text, 10));
              }}
              keyboardType="number-pad"
              max={3}
              min={0}
            />
          </View>
        </View>
      </View>

      <ScrollView style={styles.searchResult}>
        {results ? (
          <>
            <Text style={styles.searchResultsTitle}>
              Found{' '}
              <Text style={{fontWeight: theme.fontWeightExtraBold as '900'}}>
                {results.count} results
              </Text>{' '}
              in <Text>{formatNanoseconds(results.elapsed)}</Text>
            </Text>

            {/* <View> */}
            {results.hits.map((result, i) => (
              <View
                key={`${i}${result.description}`}
                style={styles.searchResult}
              >
                <Text style={common.text}>
                  Year:{' '}
                  <Text style={common.textBold}>{formatYear(result.date)}</Text>
                </Text>
                <Text style={common.text}>
                  Category 1:{' '}
                  <Text style={common.textBold}>
                    {result.categories.category1}
                  </Text>
                </Text>
                <Text style={common.text}>
                  Category 2:{' '}
                  <Text style={common.textBold}>
                    {result.categories.category2}
                  </Text>
                </Text>
                <Text style={common.text}>
                  Granularity:{' '}
                  <Text style={common.textBold}>{result.granularity}</Text>
                </Text>
                <Text style={common.text}>{result.description}</Text>
              </View>
            ))}
            {/* </View> */}
          </>
        ) : (
          <Text style={styles.searchResultsTitle}>No results</Text>
        )}
      </ScrollView>
    </View>
  );
}

export default LyraDemo;
