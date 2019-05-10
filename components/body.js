import React, { Component } from 'react';
import {
  View, Text, StyleSheet, FlatList, ActivityIndicator,
} from 'react-native';
import Tarea from './Tarea';

class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
        {
         this.props.loading
         && (
         <ActivityIndicator
  size="large"
  color="#640064"
/>
         )
       }
        <FlatList
          data={this.props.tasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Tarea item={item} eliminar={this.props.eliminar} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: '#39b351',
  },
});

export default Body;
