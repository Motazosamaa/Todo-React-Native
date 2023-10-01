//Home.jsx
const AsyncStorage = window.localStorage; // Use AsyncStorage for React Native
// Home.jsx
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Todos from "../component/Todos";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    // Load todos from local storage on component mount
    const loadTodos = async () => {
      try {
        const storedTodos = await AsyncStorage.getItem("todos");
        if (storedTodos !== null) {
          setTodos(JSON.parse(storedTodos));
        }
      } catch (error) {
        console.error("Error loading todos from local storage:", error);
      }
    };

    loadTodos();
  }, []); // Run only on component mount

  const saveTodosToLocalStorage = (todosToSave) => {
    try {
      AsyncStorage.setItem("todos", JSON.stringify(todosToSave));
    } catch (error) {
      console.error("Error saving todos to local storage:", error);
    }
  };

  const isTodoAlreadyExists = (title, description) => {
    return todos.some((todo) => todo.title === title && todo.description === description);
  };

  const addTodo = () => {
    let newTodo;

    if (title.length > 0 && description.length > 0) {
      if (isTodoAlreadyExists(title, description)) {
        alert("This to-do already exists!");
        return;
      } else {
        newTodo = {
          id: Date.now(),
          done: false,
          title,
          description,
        };
      }
    } else {
      alert("Enter the New Todo Title and Description");
      return;
    }

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTitle("");
    setDescription("");
    console.log("New Todo:", newTodo);

    // Save the updated todos to local storage
    saveTodosToLocalStorage([...todos, newTodo]);
  };

  const deleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
    console.log("Hello from delete");

    // Save the updated todos to local storage
    saveTodosToLocalStorage(updatedTodos);
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
      {todos.length !== 0 && <Todos todos={todos} onDelete={deleteTodo} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 'auto',
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
  divider: {
    width: "90%",
    height: 1,
    backgroundColor: "#EEEEEE",
    marginVertical: 20,
  },
});
