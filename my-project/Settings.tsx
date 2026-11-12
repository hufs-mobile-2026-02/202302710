
import { View, Text, Button, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from './router';

type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>;

export default function Settings({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
      <Button
        title="Home으로 이동"
        onPress={() => navigation.push('Home')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
});
