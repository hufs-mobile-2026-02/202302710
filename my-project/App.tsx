import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import Box from './Box';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './router';
import Home from './Home';
import Settings from './Settings';
import Details from './Details';
import ItemDetails from './ItemDetails';

const Stack = createNativeStackNavigator<RootStackParamList> ();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Settings' component={Settings}/>
        <Stack.Screen name='Details' component={Details}/>
        <Stack.Screen 
          name='ItemDetails' 
          component={ItemDetails}
          options={({route})=>({
            headerRight: () => {
              return (
                <Button
                  title='Buy'
                  onPress={()=>{}}
                  disabled={route.params.stock === 0}
                />
              );
            },
          })}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

~