import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Routes } from './router';
import Home from './Home';
import Settings from './Settings';
import News from './News';
import WhatsAroundMe from './GeoLocation/WhatsAroundMe';
import WeatherAroundMe from './GeoLocation/WeatherAroundMe';

const Drawer = createDrawerNavigator<Routes>();

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={{
            drawerType: isOpen ? 'permanent' : 'front',
            drawerStyle: { width: isOpen ? 240 : 0 },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => setIsOpen((prev) => !prev)}
                style={{ marginLeft: 16, padding: 4 }}
              >
                <Text style={{ fontSize: 22 }}>≡</Text>
              </TouchableOpacity>
            ),
          }}
        >
          <Drawer.Screen
            name="Home"
            component={Home}
            listeners={{ focus: () => setIsOpen(false) }}
          />
          <Drawer.Screen
            name="News"
            component={News}
            listeners={{ focus: () => setIsOpen(false) }}
          />
          <Drawer.Screen
            name="Settings"
            component={Settings}
            listeners={{ focus: () => setIsOpen(false) }}
          />
          <Drawer.Screen
            name="WhatsAroundMe"
            component={WhatsAroundMe}
            listeners={{ focus: () => setIsOpen(false) }}
          />
          <Drawer.Screen name="WeatherAroundMe" component={WeatherAroundMe} />
        </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}