import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { BackHandler, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const App = () => (
    <SafeAreaView style = {{flex: 1}}>
      <HomeScreen/>
    </SafeAreaView>
  )

const HomeScreen = () => (
  <View style = {styles.homeScreen}>
    <Header label = "Trending Woofs"></Header>
      <Trends></Trends>
    <Header label = "New Woof Posts"></Header>
      <Trends></Trends>
  </View>
);

const Header = (props) => {
  return (
    <View style = {styles.header}>
      <Text style = {styles.headerText}>
        {props.label}
      </Text>
    </View>
  );
};

const Trends = () => (
  <ScrollView horizontal = {true} style = {styles.trends}>
    <Cards></Cards>
  </ScrollView>
);

const Cards = () => {
  return (
    <View style = {styles.cards}></View>
  );
}

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  header: {
    flex: 0,
    backgroundColor: 'pink',
    // flexDirection: 'row',
    },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  trends: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: "green",
  },
  cards : {
    // backgroundColor: 'black',
    // width: 40
  },

  });

export default App;