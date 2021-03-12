import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ImageBackground,
} from "react-native";
import Constants from "expo-constants";
import { Colors } from "../component/Colors";

const Home = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/image/images.jpeg")}
        style={styles.image}
      >
        <TouchableOpacity style={styles.btn1} onPress={()=>props.navigation.navigate('Data')}>
          <Text style={styles.text1}>Data Analysis</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2} onPress={()=>props.navigation.navigate('Weather')}>
          <Text style={styles.text1}>Today's Weather</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,

    marginTop: Constants.statusBarHeight,
  },
  btn1: {
    borderRadius: 20,
    height: 50,
    width: 170,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#b4aee8",
  },
  btn2: {
    borderRadius: 20,
    height: 50,
    width: 170,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#b4aee8",
  },
  text1: {
    color: Colors.white,
    fontSize: 20,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",

    justifyContent: "space-around",
  },
});

export default Home;
