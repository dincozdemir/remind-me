import React from "react";
import { StyleSheet, Text, View } from "react-native";

import ListScreen from "./src/screens/list-screen";

export default class App extends React.Component {
  render() {
    return <ListScreen />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
});
