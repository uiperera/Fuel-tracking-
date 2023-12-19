import React from "react";
import { StyleSheet, Button, Text, View, StatusBar, Image } from "react-native";
//! --> create a variable for image path here
const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const Fuel = ({ navigation }) => {
  const renderItem = ({ item }) => <Item title={item.title} />;
  return (
    //! view is similar to dic in react JS
    <View style={styles.container}>
      <View style={styles.carContainer}>
        <View style={styles.titles}>
          <Text style={styles.title}>Types of Fuels </Text>
        </View>
        <View>
          {/*buttons to navigate */}
          <View style={styles.image}>
            <Image
              source={{
                width: 100,
                height: 100,
                marginBottom: 50,
                padding: 50,
                alignItem: "center",
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVDTK3NSqkLFkTA5NP9-b8phI19AtZsusXg&usqp=CAU",
              }}
            />
          </View>
          <View style={styles.but}>
            <Button
              title="Petrol"
              onPress={() => navigation.navigate("Petrol")}
            />
          </View>
          <View style={styles.image}>
            <Image
              source={{
                width: 100,
                height: 100,
                marginBottom: 50,
                padding: 50,
                alignItem: "center",
                uri: "https://economynext.com/wp-content/uploads/2021/12/LP-gas-queue.jpg",
              }}
            />
          </View>
          <View style={styles.but}>
            <Button
              title="Diesel"
              onPress={() => navigation.navigate("CommonFuel")}
            />
          </View>
          <View style={styles.image}>
            <Image
              source={{
                width: 100,
                height: 100,
                marginBottom: 50,
                padding: 50,
                alignItem: "center",
                uri: "https://img1.exportersindia.com/product_images/bcfull/2019/1/4384652/kerosene-oil-1547706541-4652382.jpeg",
              }}
            />
          </View>
          <View style={styles.but}>
            <Button
              title="Kerosine"
              onPress={() => navigation.navigate("CommonFuel")}
            />
          </View>
          <View style={styles.image}>
            <Image
              source={{
                width: 100,
                height: 100,
                marginBottom: 50,
                padding: 50,
                alignItem: "center",
                uri: "https://economynext.com/wp-content/uploads/2021/12/LP-gas-queue.jpg",
              }}
            />
          </View>
          <View style={styles.but}>
            <Button
              title="LP Gas"
              onPress={() => navigation.navigate("CommonFuel")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E1EAFF",
    alignItems: "center",
    justifyContent: "center",
    marginTop: StatusBar.currentHeight || 0,
  },
  carContainer: {
    width: "100%",
    height: "100%",
  },
  titles: {
    marginTop: "10%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: 2,
  },
  item: {
    backgroundColor: "#D4F7FF",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  but: {
    paddingTop: 5,
    width: "100%",
    paddingBottom: 20,
  },
  image: {
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Fuel;
