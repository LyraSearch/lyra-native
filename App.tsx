import './shim.js'; // eslint-disable-line import/no-unassigned-import
import {StatusBar} from 'expo-status-bar';
import {Text, View, Platform} from 'react-native';
import {
  SafeAreaView,
  SafeAreaProvider,
  SafeAreaInsetsContext,
} from 'react-native-safe-area-context';
import LyraDemo from './lyra-demo';
import styles from './app.component.style';
import Logo from './logo';

export default function App() {
  const Wrapper = Platform.OS === 'web' ? WebApp : NativeApp;

  console.warn(Platform.OS);

  return (
    <SafeAreaProvider>
      <Wrapper>
        <StatusBar style="light" />
        <View style={styles.container}>
          <View style={styles.header}>
            <Logo height={48} />
            <Text style={styles.pageTitle}>Try Lyra</Text>
          </View>
          <LyraDemo />
        </View>
      </Wrapper>
    </SafeAreaProvider>
  );
}

function NativeApp({children}) {
  return <SafeAreaView style={styles.iosSafeArea}>{children}</SafeAreaView>;
}

function WebApp({children}) {
  return (
    <SafeAreaInsetsContext.Consumer>
      {(insets) => (
        <View style={{...styles.iosSafeArea, paddingTop: insets.top}}>
          {children}
        </View>
      )}
    </SafeAreaInsetsContext.Consumer>
  );
}
