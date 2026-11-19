import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ghostwhite',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 100, height: 100,
    justifyContent: 'center', alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  boxText: {
    color: "darkslategray", fontWeight: "bold"
  },
  text: {
    fontWeight: 'bold'
  },
  label: {
    textAlign: "center",
    margin: 10,
  },
  mapView: {
    alignSelf: "stretch",
    height: 450,
    margin: 30,
  },
});