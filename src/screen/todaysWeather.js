import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ImageBackground,
  Dimensions,
} from "react-native";
import Constants from "expo-constants";
import { Colors } from "../component/Colors";
import { connect } from "react-redux";
import { getWeatherReport } from "../redux/action/action";
import Ant from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Ion from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";
import { getCity } from "../redux/action/action";

import { Picker } from "@react-native-picker/picker";

const Weather = (props) => {
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const result = [];
  useEffect(() => {
    props.getCity();
  }, []);
  if (props.isSuccess) {
    const res1 = props.city.filter((i) => {
      if (i.name === "India") {
        const res = i.states.filter((e) => {
          result.push(e);
        });
        return res;
      }
    });
  }

  const user = {
    city: selectedLanguage,
  };

  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
          <Ant name="arrowleft" size={30} color={Colors.black} />
        </TouchableOpacity>
        <Text style={styles.text1}>Today Weather</Text>
      </View>
      <ImageBackground
        source={require("../../assets/image/weatherBackground.jpg")}
        style={styles.image}
      >
        <View style={styles.flex2}>
          <View style={styles.textInput1}>
            <Text style={{ fontSize: 20, color: Colors.white }}> City</Text>

            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
              style={{ height: 50, width: 150, color: Colors.white }}
            >
              <Picker.Item
                label="Select City"
                value="0"
                style={{ color: Colors.white }}
              />
              {props.isSuccess
                ? result.map((key, i) => (
                    <Picker.Item key={i} label={key.name} value={key.name} />
                  ))
                : null}
            </Picker>
          </View>
          <TouchableOpacity
            onPress={() => props.getWeather(user)}
            style={styles.btn}
          >
            <Text style={{ color: Colors.white }}>Get Weather</Text>
          </TouchableOpacity>
        </View>
        {props.weather ? (
          <FlatList
            contentContainerStyle={{
              width: Dimensions.get("window").width - 20,
            }}
            data={props.weather.weather}
            renderItem={({ item }) => (
              <View>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text style={styles.city}>{props.weather.name}</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginTop: 20,
                  }}
                >
                  <View>
                    <Text style={styles.t1}>{item.main}</Text>
                    <Text style={styles.t1}>
                      max Temp:-{Math.round(props.weather.main.temp_max - 273)}
                    </Text>
                    <Text style={styles.t1}>
                      min Temp:-{Math.round(props.weather.main.temp_min - 273)}
                    </Text>
                  </View>
                  <View style={{ marginLeft: 10 }}>
                    {item.main == "Haze" ? (
                      <Fontisto
                        name="day-haze"
                        size={100}
                        color={Colors.white}
                      />
                    ) : item.main == "Clear" ? (
                      <Feather name="sun" size={100} color={Colors.white} />
                    ) : item.main == "Clouds" ? (
                      <Ant name="cloud" size={100} color={Colors.white} />
                    ) : item.main == "rain" ? (
                      <Ion name="rainy" color={Colors.white} />
                    ) : null}
                  </View>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        ) : null}
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
  flex2: {
    flex: 1,
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
    color: Colors.black,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    padding: 20,
    borderWidth: 2,
    borderColor: Colors.lightgray,
    backgroundColor: Colors.lightgray,
  },
  btn: {
    width: 100,
    height: 60,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 20,
    borderColor: Colors.white,
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
  textInput1: {
    borderWidth: 1,
    borderRadius: 20,
    fontSize: 20,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    borderColor: Colors.white,
  },
  city: {
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  t1: {
    color: Colors.white,
  },
});
const mapStateToProps = (state) => {
  return {
    weather: state.GetWeather.data,
    success: state.GetWeather.success,
    city: state.GetCity.data,
    isSuccess: state.GetCity.isSuccess,
  };
};

const mapdispatchToProps = (dispatch) => {
  return {
    getWeather: (user) => dispatch(getWeatherReport(user)),
    getCity: (user) => dispatch(getCity(user)),
  };
};
export default connect(mapStateToProps, mapdispatchToProps)(Weather);
