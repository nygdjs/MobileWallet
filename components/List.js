import React from "react";
import { FlatList } from "react-native";
import Item from "./Item";

const List = ({ items, onRemove }) => {
  console.log(items);

  return (
    <FlatList
      data={items}
      renderItem={({ item }) => (
        <Item item={item} onRemove={item => onRemove(item)} />
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default List;
