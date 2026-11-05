import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.boxText}>나의 학번은 202302710</Text>
        <Text style={styles.boxText}>나의 학번은 202302710</Text>
        <Text style={styles.boxText}>나의 학번은 202302710</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}