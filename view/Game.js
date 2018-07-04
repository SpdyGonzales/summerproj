GLOBAL.self = GLOBAL;
import React, { Component } from 'react';
import GifHandler from './GifHandler.js';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Image,
  KeyboardAvoidingView,
  StatusBar
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { SearchBar } from 'react-native-elements'

export default class Game extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
      gifMes: [],
    };
  }
  componentDidMount() {
     StatusBar.setHidden(true);
  }
  static navigationOptions = {
    header: null,
    headerStyle: {
    backgroundColor: '#556B2F'
   }
  }

  handleGifRend = (gifMessage) => {
      let arr = this.state.gifMes;
      if(!arr.includes(gifMessage)){
        arr.push(gifMessage);
        this.setState({gifMes: arr})
        console.log(this.state.gifMes);
      }
  }

  render() {
    const mesList = this.state.gifMes.map((gif, index) =>
      <Image
        source={ { uri:gif } }
        style={ styles.image }
      />
    );
    return (
      <View style={styles.container}>
      <KeyboardAvoidingView style={styles.board}>
      <FlatList
        data={mesList}
        keyboardShouldPersistTaps={'always'}
        renderItem={({ item }) => item
      }
      />
      </KeyboardAvoidingView>
      <View style={styles.searchArea}>
      <GifHandler
        inputText={this.state.text}
        handleGifSelect={this.handleGifRend}
      />
      </View>
        <View style={styles.searchBars}>
        <SearchBar
        lightTheme
        //Fix timeout for better performance
        onChangeText={text => this.setState({text})}
        value ={this.state.text}
          //onChangeText={someMethod}
          //onClearText={someMethod}
          placeholder='Search GIF library' />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0FFFF',
    flexDirection: 'column',
  },
  searchBars: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  image:{
    width: 400,
    height: 200,
    borderRadius: 2,
    marginBottom: 3
  },
  searchArea:{
    position: 'absolute'
  },
  board:{
    marginBottom: 60
  }
});
