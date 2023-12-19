import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);
const HomeScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Fuel Tracker ! </Text>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={styles.screenContainer}>
        <AppButton
          title="LOGIN"
          onPress={() => navigation.navigate("Menu")}
          size="sm"
          backgroundColor="#007bff"
        />
      </View>
      <View style={styles.screenContainer}>
        <AppButton
          title="Register"
          onPress={() => navigation.navigate("Register")}
          size="sm"
          backgroundColor="#007bff"
        />
      </View>
    </View>
  );
};
// importing part comes here
import Register from "./Register/Register";
import Menu from "./Menu/Menu";
import Fuel from "./Fuel/Fuel";
import CommonFuel from "./CommonFuels/CommonFuel";
import Petrol from "./Petrol/Petrol";
import Station from "./Station/Station";
import Notification from "./Notification/Notification";
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Fuel" component={Fuel} />
        <Stack.Screen name="CommonFuel" component={CommonFuel} />
        <Stack.Screen name="Petrol" component={Petrol} />
        <Stack.Screen name="Station" component={Station} />
        <Stack.Screen name="Notification" component={Notification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CADDF3",
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    backgroundColor: "#D4F7FF",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  header: {
    height: 30,
    marginBottom: 30,
    fontSize: 30,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#4A9DFE",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 30,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
export default App;
