import React, { useState } from "react";
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
import { connect } from "react-redux";
import { getWeatherReport } from "../redux/action/action";
import Ant from "react-native-vector-icons/AntDesign";
import { setContext } from "@redux-saga/core/effects";

const Weather = (props) => {
  const [text, setText] = useState("");
  const user = {};
  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
          <Ant name="arrowleft" size={30} />
        </TouchableOpacity>
        <Text style={styles.text1}>Today Weather</Text>
      </View>
      <View style={styles.flex1}>
        <TextInput
          value={text}
          onChangeText={(e) => setText(e)}
          style={styles.textInput}
          placeholder={"CityName"}
        />
        <TouchableOpacity
          onPress={() => props.getWeather(user)}
          style={styles.btn}
        >
          <Text>Get Weather</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,

    marginTop: Constants.statusBarHeight,
  },
  flex1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tableHead: {
    backgroundColor: Colors.grey,
  },
  text1: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 30,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    padding: 20,
    borderWidth: 2,
    borderColor: Colors.lightgray,
  },
  btn: {
    width: 100,
    height: 60,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 20,
  },
  textInput: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderRadius: 20,
    fontSize: 20,
    paddingLeft: 20,
    marginTop: 20,
  },
});
// const mapStateToProps = (state) => {
//   return {
//     isLoading: state.DeleteOption.data,
//   };
// };

const mapdispatchToProps = (dispatch) => {
  return {
    getWeather: (user) => dispatch(getWeatherReport(user)),
  };
};
export default connect(null, mapdispatchToProps)(Weather);
