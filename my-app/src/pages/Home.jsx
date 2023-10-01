import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Todos from "../component/Todos";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigation = useNavigation();

  const isTodoAlreadyExists = (title, description) => {
    return todos.some(
      (todo) => todo.title === title && todo.description === description
    );
  };

  const addTodo = () => {
    if (title.length > 0 && description.length > 0) {
      if (isTodoAlreadyExists(title, description)) {
        alert("This to-do already exists!");
        return;
      }
      else{

      const newTodo = {
        id: Date.now(),
        done: false,
        title,
        description,
      };

      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setTitle("");
      setDescription("");
      console.log("New Todo:", newTodo);
    }} else {
      alert("Enter the New Todo Title and Description");
    }
  };



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>

      <TextInput
        style={styles.inputT}
        placeholder="Title"
        onChangeText={(value) => setTitle(value)}
      />

      <TextInput
        style={styles.input}
        placeholder="Description"
        onChangeText={(value) => setDescription(value)}
      />

      <TouchableOpacity style={styles.button} onPress={addTodo}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>




      <View style={styles.divider} />
      <Text>{Todos.length !== 0 && <Todos todos={todos} />}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:'auto',
    paddingTop: 40,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#222831",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#00ADB5",
  },
  inputT: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    width: "80%",
    color: "#EEEEEE",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    width: "80%",
    color: "#EEEEEE",
  },
  button: {
    backgroundColor: "#00ADB5",
    padding: 15,
    margin: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#222831",
    textAlign: "center",
    fontWeight: "bold",
  },
  Gbutton: {
    backgroundColor: "#71C9CE",
    paddingLeft: 90,
    paddingRight: 90,
    padding: 20,
    margin: 20,
    borderRadius: 5,
  },
  divider: {
    width: "90%",
    height: 1,
    backgroundColor: "#EEEEEE",
    marginVertical: 20,
  }
});
