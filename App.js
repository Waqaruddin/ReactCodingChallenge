import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [counter, setCounter] = useState(0);


  return (
    <View style={styles.container}>

      <Button

      color = "#FF8C00"
      
      style ={styles.button1} title = "INCREMENT" 
      onPress = {() => {setCounter(counter+1)}}
      />
      

      <Button
      style = {styles.button2}
      title = "DECREMENT"
      onPress = {() => {setCounter(counter-1)}}/>

      <Text> Counter =  {counter}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button1:{
    paddingTop:10,
    paddingBottom:10,
    marginTop:15,
    marginRight:40,
    borderWidth:1,
    fontWeight:'bold'
  },

  button2:{
    paddingTop:10,
    paddingBottom:10,
    marginTop:15,
    marginRight:40,
    borderWidth:1
  }
});
