import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import Box from './Box';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList, Routes } from './router';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import Settings from './Settings';
import Details from './Details';
import ItemDetails from './ItemDetails';
import News from './News';

const Stack = createNativeStackNavigator<RootStackParamList> ();

const Tab = createBottomTabNavigator<Routes>();
const Drawer = createDrawerNavigator<Routes>();


export default function App() {
  return (
    <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="News" component={News} />
          <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>

    </NavigationContainer>
  );
}