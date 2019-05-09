import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Tarea extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>{this.props.item.texto}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  texto: {
    flex: 1,
    fontSize: 24,
  },
});

export default Tarea;
