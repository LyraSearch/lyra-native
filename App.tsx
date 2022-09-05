import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import {LyraDemo} from './LyraDemo';
import styles from './app.component.style';
import theme from './theme.style';

export default function App() {
  return (
    <SafeAreaView style={styles.iosSafeArea}>
      <StatusBar style="light" />
      <View style={styles.container}>
        {/* <View>
          <Image
            style={{height: '100%', width: '100%'}}
            source={require('./lyra.svg')}
          />
        </View> */}
        <Text style={styles.pageTitle}>Welcome to Lyra</Text>
        <LyraDemo />
      </View>
    </SafeAreaView>
  );
}
