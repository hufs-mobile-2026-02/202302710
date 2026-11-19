import { useEffect } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as Location from "expo-location";
import MapView from "react-native-maps";
import styles from "../styles";

const APPLICATION_KEY = process.env.EXPO_PUBLIC_WEATHER_API_KEY;

type Weather = { temp: string; desc: string; icon: string; name: string };

export default function WeatherAroundMe() {
  useEffect(() => {
    Location.requestForegroundPermissionsAsync();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <MapView
        style={styles.mapView}
        showsUserLocation
        followsUserLocation
      />
    </View>
  );
}