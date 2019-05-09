import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import Body from './components/body';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      tareas: [],
      texto: '',
    };
  }

  setText = (value) => {
    this.setState({
      texto: value,
    });
  }

  addTask = () => {
    this.setState({
      tareas: [...this.state.tareas, { texto: this.state.texto, key: Date.now() }],
      texto: '',
    });
    console.log(this.state.tareas);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header changeText={this.setText} addTask={this.addTask} clean={this.state.texto} />
        <Text>{this.state.texto}</Text>
        <Body tasks={this.state.tareas} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
