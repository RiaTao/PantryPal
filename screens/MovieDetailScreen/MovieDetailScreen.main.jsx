import React from "react";
import { SafeAreaView, Text, Image, ScrollView } from "react-native";
import { styles } from "./MovieDetailScreen.styles";

export default function MovieDetailScreen({ navigation, route }) {
  // TODO: Recieve the movieItem by destructuring route params.
  const movieItem = route.params.item;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.h1}>
          {movieItem.title}
        </Text>
        <Image style = {styles.poster} source = {{ uri: movieItem?.posterurl }}>
        </Image>
        <Text style = {styles.h3}>
          Released: {movieItem.year}
        </Text>
        <Text style = {styles.h2}>
          Genres: {movieItem.genres.join(', ')}
        </Text>
        <Text style = {styles.h2}>
          Featuring: {movieItem.actors.join(', ')}
        </Text>
        <Text style={styles.h4}>
          {movieItem.storyline}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
