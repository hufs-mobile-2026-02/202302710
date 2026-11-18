import React from "react";
import { View, Text, StatusBar } from "react-native";
import styles from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./router";

type Props = NativeStackScreenProps<RootStackParamList, "ItemDetails">;

export default function ItemDetails ({ route, navigation }: Props) {
  const { content, title } = route.params;

  React.useEffect(
    ()=>{
      navigation.setOptions(
        {title: title}
      );
    },
    [navigation, title]
  );
  
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text>{content}</Text>
    </View>
  );
}
