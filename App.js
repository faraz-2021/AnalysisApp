import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screen/Home";
import { Colors } from "./src/component/Colors";
import Data from "./src/screen/dataAnalysis";
import Weather from "./src/screen/todaysWeather";
import { Provider } from "react-redux";
import store from "./src/redux/store/store";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Data" component={Data} />
          <Stack.Screen name="Weather" component={Weather} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>

        <StatusBar barStyle="light-content" style="auto" />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
