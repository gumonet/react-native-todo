import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TextInput,
} from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Header</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder=" Ingresa tu texto "
          onChangeText={(value) => { this.props.changeText(value); }}
          onSubmitEditing={this.props.addTask}
          value={this.props.clean}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#00FF00',
  },
  inputStyle: {
    paddingHorizontal: 16,
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 24,
  },
});

export default Header;
