import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

const Item = ({ item, onRemove }) => (
  <View>
    <Image source={{ uri: item.uri }} style={styles.image} />
    <TouchableOpacity style={styles.button} onPress={() => onRemove(item)}>
      <Text>Remove</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 200
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  button: {
    backgroundColor: "indianred",
    color: "white",
    padding: 10
  }
});

export default Item;
