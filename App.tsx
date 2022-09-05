import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {LyraDemo} from './LyraDemo';
import styles from './app.component.style';
import theme from './theme.style';

export default function App() {
  return (
    <SafeAreaView style={styles.app}>
      <View style={styles.container}>
        <Text style={styles.pageTitle}>Welcome to Lyra</Text>
        {/* <Text>Open up App.js to start working on your app! dfd</Text> */}
        <LyraDemo />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
