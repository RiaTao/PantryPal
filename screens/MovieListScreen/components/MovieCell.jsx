import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "../MovieListScreen.styles";

export const MovieCell = ({ movieItem }) => {
  // TODO: Create and return the MovieCell component.
  // HINT: Take a look at the movieCell styles, as well as the video
  // demo in the spec, to figure out what this should look like.
  const actors = movieItem.actors.join(', ')
  return (
    <View style = {styles.movieCell}>
      <Image style = {styles.movieCellImage} source = {{ uri: movieItem?.posterurl }}></Image>
      <Text style = {styles.movieCellTitle} textAlignVertical="center">   {movieItem.title}</Text>
      <Text>        </Text>
      <Text style = {styles.movieCellSubtitle}> {actors}</Text>
    </View>
  );
};
