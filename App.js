// App.js is the entry point of our application.
import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MovieListScreen from "./screens/MovieListScreen/MovieListScreen.main";
import MovieDetailScreen from "./screens/MovieDetailScreen/MovieDetailScreen.main";
import MovieFilterScreen from "./screens/MovieFilterScreen/MovieFilterScreen.main";
import { ScreenStackHeaderRightView } from "react-native-screens";
import { Button } from "react-native-elements";

/* TODO: 

  This app has three screens:
    (1) MovieListScreen
    (2) MovieDetailScreen
    (3) MovieFilterScreen

  Screens (1) and (2) are on the same navigation stack.
  Screen (3) is presented modally.

  This setup is identical to the setup in the React Navigation documentation.
  Read the example carefully to set up this app's screen heirarchy in a similar manner.

  https://reactnavigation.org/docs/modal */
const Stack = createStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Group screenOptions = {{ presentation: 'card' }}> {/* Regular Screen Group */}
        <Stack.Screen
          name = "Movie Catalog"
          component = {MovieListScreen}
          options = {{
            headerRight : () => (
              <Button
                title = "Filter"
              />
            )
          }}
        />
        <Stack.Screen
          name = "About"
          component = {MovieDetailScreen}
        />
      </Stack.Group>
      <Stack.Group screenOptions = {{ presentation: 'modal' }}> {/* Modal Screen Group */}
        <Stack.Screen
          name = "Filter Movies"
          component = {MovieFilterScreen}
          options = {{
            headerRight : () => (
              <Button
                title = "Done"
              />
            )
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  </NavigationContainer>
  );
}
