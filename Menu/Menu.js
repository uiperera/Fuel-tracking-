import React from "react";
import { StyleSheet, Button, Text, Image, View } from "react-native";
//! --> create a variable for image path here
const Menu = ({ navigation }) => {
  return (
    //! view is similar to dic in react JS
    <View style={styles.carContainer}>
      <View style={styles.image}>
        <Image
          source={{
            width: 150,
            height: 220,
            marginBottom: 50,
            padding: 50,
            alignItem: "center",
            uri: "https://etimg.etb2bimg.com/photo/64886838.cms",
          }}
        />
        <View style={styles.titles}>
          {/* text component */}
          <Text style={styles.title}>Welcome !</Text>
          <Text style={styles.subtitle}>
            Sri Lankan staterun fuel retailer, Ceylon Petroleum Corp (CPC), has
            reversed a .. Read more at:
            https://energy.economictimes.indiatimes.com/news/oil-and-gas/sri-lankas-ceylonpetroleum-rows-back-on-fuel-price-increase/64886770{" "}
          </Text>
        </View>
        <View style={styles.but1}>
          {/* button component - to trigger an event like: navigating to another
screen !!! */}
          <Button title="Fuel" onPress={() => navigation.navigate("Fuel")} />
        </View>
        <View style={styles.but2}>
          <Button
            title="Live Queue Map"
            onPress={() => navigation.navigate("Station")}
          />
        </View>
        <View style={styles.but2}>
          <Button
            title="Notifications"
            onPress={() => navigation.navigate("Notification")}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  carContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#E1FBFF",
  },
  titles: {
    marginTop: "5%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
  },
  but1: {
    paddingTop: 5,
    width: "50%",
  },
  but2: {
    paddingTop: 10,
    width: "50%",
  },
});
export default Menu;
