import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Game from './view/Game.js';

type Props = {};
class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
    headerStyle: {
    backgroundColor: '#556B2F'
   }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Main Page
        </Text>
        <Button
          title='Friendly Game'
          color='#841584'
          onPress={() => this.props.navigation.navigate('Friendly')}
        />
      </View>
    );
  }
}

class FriendlyLobby extends Component {
  static navigationOptions = {
    headerStyle: {
    backgroundColor: '#556B2F'
   }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Lobby
        </Text>
        <Button
          title='Start Game'
          color='#841584'
          onPress={() => this.props.navigation.navigate('GamePage')}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Friendly: FriendlyLobby,
    GamePage: Game,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6B8E23',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'American Typewriter'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
