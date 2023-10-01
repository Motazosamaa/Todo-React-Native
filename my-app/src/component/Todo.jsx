import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-web";
import { useNavigation } from "@react-navigation/native";

const Todo = ({ todo }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
    onPress={()=> navigation.navigate('Todo-details',todo)}

      activeOpacity={0.9}
      style={{
        width: 300,
        minHeight: 50,
        padding: 15,
        marginBottom: 10,
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundColor: "#00ADB5",
        borderRadius: 5,
      }}
    >
      <Text>{todo.title}</Text>
    </TouchableOpacity>
  );
};

export default Todo;
