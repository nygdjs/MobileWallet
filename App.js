/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  TouchableOpacity
} from "react-native";
import ImagePicker from "react-native-image-picker";
import List from "./components/List";
import Button from "./components/atoms/Button";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    items: []
  };

  handlePress = () => {
    var options = {
      title: "Select Image",
      customButtons: [
        {
          name: "fb",
          title: "Choose Photo from Facebook"
        }
      ],
      storageOptions: {
        skipBackup: true,
        path: "images"
      }
    };

    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        Alert.alert(response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        this.addItem(response.uri);
      }
    });
  };

  addItem = uri => {
    const newId =
      Math.max(0, ...this.state.items.map(item => Number(item.id))) + 1;

    const newItem = {
      id: String(newId),
      uri: uri
    };

    const newItems = [...this.state.items, newItem];

    this.setState({
      items: newItems
    });
  };

  handleRemove = item => {
    const { id } = item;
    const newItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: newItems
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> Welcome to React Native! </Text>
        <Button onPress={this.handlePress}>📸Pick an image</Button>
        <List
          items={this.state.items}
          onRemove={item => this.handleRemove(item)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    flex: 1,
    justifyContent: "center",
    paddingTop: 20
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: "center"
  },
  instructions: {
    color: "#333333",
    marginBottom: 5,
    textAlign: "center"
  },
  image: {
    width: 200,
    height: 200
  }
});
