import { View, Text } from "react-native";
import React from "react";
import Todo from "./Todo";

const Todos = ({ todos, onDelete }) => {
  return (
    <View>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} onDelete={onDelete} />
      ))}
    </View>
  );
};

export default Todos;
