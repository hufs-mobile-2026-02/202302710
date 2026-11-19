import React, { useState, useEffect } from "react";
import { View, Text, Image, StatusBar } from "react-native";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import styles from "../styles";

type WeatherInfo = {
  temp: number;
  description: string;
  icon: string;
  city: string;
};

export default function WeatherAroundMe() {
  const [weather, setWeather] = useState<WeatherInfo | null>(null);

  useEffect(() => {
    async function loadWeather() {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") return;

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      const apiKey = process.env.EXPO_PUBLIC_WEATHER_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=kr`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.main && data.weather) {
          setWeather({
            temp: data.main.temp,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
            city: data.name,
          });
        }
      } catch (e) {
        console.error(e);
      }
    }

    loadWeather();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {weather ? (
        <View style={{ alignItems: "center", marginBottom: 10 }}>
          <Text style={styles.text}>
            {weather.city} : {weather.temp}°C ({weather.description})
          </Text>
          <Image
            source={{ uri: `https://openweathermap.org/img/wn/${weather.icon}@2x.png` }}
            style={{ width: 50, height: 50 }}
          />
        </View>
      ) : (
        <Text style={styles.label}>Loading...</Text>
      )}
      <MapView
        style={styles.mapView}
        showsUserLocation
        followsUserLocation
      />
    </View>
  );
}