import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native';


const TodoDetails = ({route}) => {
  const params = useRoute().params;
console.log(params)

  return (
    <View  style={styles.container}>

    <Text style={{
        width: 500,
        minHeight: 50,
        padding: 15,
        marginBottom: 10,
        alignItems: "flex-start",
        textAlign:'center',
        justifyContent: "center",
        backgroundColor: "#00ADB5",
        borderRadius: 5,
        fontSize:25
      }}> {"Title : " + params.title}</Text>

<View style={styles.divider} />

<Text style={{
        width: 500,
        minHeight: 700,
        padding: 15,
        marginBottom: 10,
        
        alignItems: "flex-start",
        textAlign:'center',
        justifyContent: "center",
        backgroundColor: "#00ADB5",
        borderRadius: 5,
        fontSize:18
      }}> {params.description}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height:'auto',
    paddingTop: 40,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#00ADB5",
  },
  divider: {
    width: "90%",
    height: 1,
    backgroundColor: "#EEEEEE",
    marginVertical: 20,
  }
});

export default TodoDetails