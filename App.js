import React,{Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground
} from 'react-native';
import { Header } from 'react-native-elements';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import BottomTabNavigator from "./components/bottomTabNavigator";
import { Rajdhani_600SemiBold } from "@expo-google-fonts/rajdhani";
import * as Font from "expo-font";

export default class App extends Component{
constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async loadFonts() {
    await Font.loadAsync({
      Rajdhani_600SemiBold: Rajdhani_600SemiBold
    });
    this.setState({ fontLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }


  render() {
    const { fontLoaded } = this.state;
    if (fontLoaded) {
      return  <BottomTabNavigator/>;
    }
    return null;
  }}