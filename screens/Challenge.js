import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";

import data from "../assets/date.json";

const images = {
  "android-icon-background.png": require("../assets/android-icon-background.png"),
  "android-icon-foreground.png": require("../assets/android-icon-foreground.png"),
  "android-icon-monochrome.png": require("../assets/android-icon-monochrome.png"),
  "favicon.png": require("../assets/favicon.png"),
  "icon.png": require("../assets/icon.png"),
  "splash-icon.png": require("../assets/splash-icon.png"),
};

const Item = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image
        source={images[item.image]}
        style={styles.image}
      />

      <View style={styles.info}>
        <Text style={styles.name}>
          {item.name}
        </Text>

        <Text style={styles.description}>
          {item.description}
        </Text>
      </View>
    </View>
  );
};

const Challenge = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Products
      </Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Item item={item} />
        )}
      />
    </View>
  );
};

export default Challenge;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  item: {
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
    padding: 15,
    marginBottom: 12,
    borderRadius: 10,
  },

  image: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    marginRight: 15,
  },

  info: {
    flex: 1,
    justifyContent: "center",
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 5,
  },

  description: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
});
