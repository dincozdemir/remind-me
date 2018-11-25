import React from "react";
import { View, Text, FlatList } from "react-native";

class ListScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: ["Test"] };
  }
  addItem() {
    this.setState((prev, props) => {
      return {
        list: [...prev.list, ""]
      };
    });
  }
  render() {
    return (
      <FlatList
        contentContainerStyle={styles.container}
        data={this.state.list}
        keyExtractor={({ item }, index) => `${index}`}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  list: {
    backgroundColor: "red"
  }
};

export default ListScreen;
