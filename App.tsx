import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, Text, View} from 'react-native';
import LyraDemo from './lyra-demo';
import styles from './app.component.style';
import Logo from './logo';

export default function App() {
  return (
    <SafeAreaView style={styles.iosSafeArea}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Logo height={48} />
          <Text style={styles.pageTitle}>Try Lyra</Text>
        </View>
        <LyraDemo />
      </View>
    </SafeAreaView>
  );
}
