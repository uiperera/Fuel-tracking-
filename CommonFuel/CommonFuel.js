import React from "react";
import {
  StyleSheet,
  Button,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
//! --> create a variable for image path here
const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);
const CommonFuel = ({ navigation }) => {
  const renderItem = ({ item }) => <Item title={item.title} />;
  return (
    //! view is similar to dic in react JS
    <View style={styles.container}>
      <View style={styles.carContainer}>
        <View style={styles.titles}>
          {/* text component */}
          <Text style={styles.title}>Check For Diesel,Kerosine,LP Gas </Text>
        </View>

        {/* body Component */}
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="District."
            placeholderTextColor="#003f5c"
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="City."
            placeholderTextColor="#003f5c"
          />
        </View>
        {/* button to navigate */}
        <View style={styles.screenContainer}>
          <AppButton
            title="Seach for nearest Station"
            onPress={() => navigation.navigate("Station")}
            size="sm"
            backgroundColor="#007bff"
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3FDFC",
    alignItems: "center",
    justifyContent: "center",
    marginTop: StatusBar.currentHeight || 0,
  },
  carContainer: {
    width: "100%",
    height: "100%",
  },
  titles: {
    marginTop: "5%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  item: {
    backgroundColor: "#D4F7FF",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  inputView: {
    backgroundColor: "#D4F7FF",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    marginLeft: 50,
    marginTop: 20,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
export default CommonFuel;
