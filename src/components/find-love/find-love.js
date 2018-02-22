import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class FindLove extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Find Love</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff4081'
  }
});

export default FindLove;
