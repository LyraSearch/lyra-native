import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import {LyraDemo} from './LyraDemo';
import styles from './app.component.style';
import theme from './theme.style';
import Logo from './Logo';

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
