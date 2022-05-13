import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

export default class GoButton extends React.Component {
 constructor(props){ 
    super(props);
    this.state = {
      pressedButtonIndex : "",
      }
 }
  playSound = async (soundChunk) => {
    console.log(soundChunk);
    var soundLink =
    
      soundChunk 
      ;
    await Audio.Sound.createAsync(
      {
        uri: soundLink,
      },
      { shouldPlay: true }
    );
  };
  render() {
    return (
      <TouchableOpacity
        style={
          this.props.buttonIndex === this.state.pressedButtonIndex
          ?[styles.chunkButton,{backgroundColor:"white"}]
          :[styles.chunkButton,{backgroundColor:"red"}]
        }

        onPress={() => {
          this.setState({pressedButtonIndex : this.props.buttonIndex})
          this.playSound(this.props.soundChunk);
        }}>
        <Text style={
          this.props.buttonIndex === this.state.pressedButtonIndex
          ?[styles.displayText,{color:"red"}]
          :[styles.displayText,{color:"white"}]
        }>{this.props.wordChunk}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  displayText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white'
  },
  chunkButton:{
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'red'
  }
});