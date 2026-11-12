import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import Box from './Box';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './router';
import Home from './Home';
import Settings from './Settings';

const Stack = createNativeStackNavigator<RootStackParamList> ();

export default function App() {
  return (
        <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Settings' component={Settings}/>
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}
