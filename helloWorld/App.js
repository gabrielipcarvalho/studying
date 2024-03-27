import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [petName, setPetName] = useState('');
  const [bday, setBday] = useState('');
  const [breed, setBreed] = useState('');
  const [favouriteToy, setFavouriteToy] = useState('');

  const matchPassword = password === checkPassword;
  return (
  <ScrollView style = {{backgroundColor: "#ecf0f1", padding: 16}}>
    <View
      style={{justifyContent: 'center'}}>
      <Data 
        label = "E-mail"
        placeholder = "Type your e-mail here..."
        value = {email}
        onChangeText = {text => setEmail(text)}
      />
      <Data 
        label = "Password" 
        placeholder = "Type your password here..."
        value = {password}
        onChangeText = {text => setPassword(text)}
        obscureText = {true}
      />
      <Data 
        label = "Enter your Password again"
        placeholder = "Type again your password here..."
        value = {checkPassword}
        onChangeText = {text => setCheckPassword(text)}
        obscureText = {true} 
      />
      {password && checkPassword && matchPassword === false && (
        <Text style={{color:'red', marginLeft: 10, fontSize: 18}}>Passwords don't match</Text>
      )}
      <Data 
        label = "Pet's Name"
        placeholder = "Type you pet's name here..."
        value = {petName}
        onChangeText = {text => setPetName(text)}
      />
      <Data
        label = "Pet's date of birth"
        placeholder = "Type you pet's birthday here..."
        value = {bday}
        onChangeText = {text => setBday(text)}
      />
      <Data
        label = "Pet's Breed"
        placeholder = "Type you pet's breed here..."
        value = {breed}
        onChangeText = {text => setBreed(text)}
      />
      <Data
        label = "Pet's Favourite Toy"
        placeholder = "Type you pet's favourite toy here..."
        value = {favouriteToy}
        onChangeText = {text => setFavouriteToy(text)}
      />
    </View>
</ScrollView>
  )
};

const Data = (props) => {
  return (
  <View style = {{margin: 5}}>
    <Text style = {{padding: 8, fontSize: 18}}>{props.label}</Text>
    <TextInput
      placeholder = {props.placeholder}
      value = {props.value}
      onChangeText = {props.onChangeText}
      secureTextEntry = {props.obscureText}
      style = {
        {borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'gainsboro',
        width: 250,
        padding: 8,
        fontSize: 18}}
    />
  </View>
)}

export default App;
