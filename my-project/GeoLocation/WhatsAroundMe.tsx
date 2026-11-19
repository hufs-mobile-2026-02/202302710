import React from "react";
import { View, StatusBar } from "react-native";
import MapView from "react-native-maps";
import styles from "../styles";

export default function WhatsAroundMe() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <MapView
        style={styles.mapView}
        showsUserLocation
        followsUserLocation
      />
    </View>
  );
}