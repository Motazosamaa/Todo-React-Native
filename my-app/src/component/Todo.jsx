import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-web";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons"; // Import FontAwesome from react-native-vector-icons

const Todo = ({ todo, onDelete }) => {
  const navigation = useNavigation();

  const handleDelete = () => {
    onDelete(todo.id); // Pass the todo id to the onDelete function
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Todo-details', todo)}
      activeOpacity={0.9}
      style={{
        width: 300,
        minHeight: 50,
        padding: 15,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#00ADB5",
        borderRadius: 5,
      }}
    >
      <Text>{todo.title}</Text>
      <TouchableOpacity onPress={handleDelete}>
        {/* Replace "Delete" text with FontAwesome icon */}
        <FontAwesome name="trash" size={20} color="white" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default Todo;
