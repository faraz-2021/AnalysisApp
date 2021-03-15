import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ImageBackground,
  FlatList,
  ScrollView,
  Dimensions,
} from "react-native";
import Constants from "expo-constants";
import { Colors } from "../component/Colors";
import { LineChart } from "react-native-chart-kit";
import { data } from "../component/data";
import Ant from "react-native-vector-icons/AntDesign";

const Data = (props) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.flex}>
        <TouchableOpacity onPress={()=>props.navigation.navigate('Home')}>
          <Ant name="arrowleft" size={30} />
        </TouchableOpacity>
        <Text style={styles.text1}>Data Analysis</Text>
      </View>

      <View
        style={{
          juatifyContent: "center",
          alignItems: "center",
          marginTop:50
        }}
      >
        <Text style={styles.text}>Birth in Taiwan</Text>
        <LineChart
          data={{
            labels: data.labels,
            datasets: data.datasets,
            legend: data.legend,
          }}
          width={Dimensions.get("window").width - 20}
          height={370}
          yAxisLabel="$"
          yAxisInterval={100}
          chartConfig={{
            backgroundColor: Colors.yellow,
            backgroundGradientFrom: Colors.yellow,
            backgroundGradientTo: Colors.yellow,
            decimalPlaces: 2,
            color: () => Colors.red,
            labelColor: () => Colors.blue,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "4",
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,

    marginTop: Constants.statusBarHeight,
  },
  tableHead: {
    backgroundColor: Colors.grey,
  },
  text1: {
    fontSize: 20,
    fontWeight:"bold"
  },
  text: {
    fontSize: 30,
  },
  flex: {
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    padding:20,
    borderWidth:2,
    borderColor: Colors.lightgray,
  },
});
export default Data;
