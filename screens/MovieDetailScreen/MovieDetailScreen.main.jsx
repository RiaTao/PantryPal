import React from "react";
import { SafeAreaView, Text, Image, ScrollView } from "react-native";
import { styles } from "./MovieDetailScreen.styles";

export default function MovieDetailScreen({ route }) {
  // TODO: Recieve the movieItem by destructuring route params.
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        {route.Image}
        {route.Text}
      </ScrollView>
    </SafeAreaView>
  );
}
