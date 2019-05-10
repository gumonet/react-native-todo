import React, { Component } from 'react';
import {
  StyleSheet, Text, View, AsyncStorage, Button,
} from 'react-native';
import Header from './components/header';
import Body from './components/body';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      tareas: [],
      texto: '',
      loading: true,
    };
  }

  componentDidMount() {
    this.getStorage();
  }

  setText = (value) => {
    this.setState({
      texto: value,
    });
  };

  addTask = () => {
    const nuevas_tareas = [...this.state.tareas, { texto: this.state.texto, key: Date.now() }];
    this.saveStorage(nuevas_tareas);
    this.setState({
      tareas: nuevas_tareas,
      texto: '',
    });
    console.log(this.state.tareas);
  }

  removeTask = (id) => {
    const nuevas_tareas = this.state.tareas.filter(tarea => tarea.key !== id);
    this.saveStorage(nuevas_tareas);
    this.setState({
      tareas: nuevas_tareas,
    });
  }

  saveStorage = (tasks) => {
    AsyncStorage.setItem('@AppCursoUdemy:tasks', JSON.stringify(tasks))
      .then((value) => {
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getStorage = () => {
    AsyncStorage.getItem('@AppCursoUdemy:tasks')
      .then((value) => {
        console.log(value);
        console.log('+++++++++++++++++');
        const nuevas_tareas = JSON.parse(value);
        console.log(JSON.parse(value));
        if (value !== null) {
          this.setState({
            tareas: nuevas_tareas,
          });
        }
        this.setState({
          loading: false,
        });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header changeText={this.setText} addTask={this.addTask} clean={this.state.texto} />
        <Body tasks={this.state.tareas} eliminar={this.removeTask} loading={this.state.loading} />
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
