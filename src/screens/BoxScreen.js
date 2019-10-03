import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const BoxScreen = () => {
  return <View style={styles.viewStyle}>
    <View style={styles.boxOneStyle}>
      <Text style={styles.textStyle}>Child 1</Text>
    </View>
    <View style={styles.boxTwoStyle}>
      <Text style={styles.textStyle}>Child 2</Text>
    </View>
    <View style={styles.boxThreeStyle}>
      <Text style={styles.textStyle}>Child 3</Text>
    </View>
  </View>
};

const styles = StyleSheet.create({
  viewStyle: {
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  boxOneStyle: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
    justifyContent: 'center'
  },
  boxTwoStyle: {
    height: 100,
    width: 100,
    alignSelf: 'flex-end',
    backgroundColor: 'green',
    justifyContent: 'center'
  },
  boxThreeStyle: {
    height: 100,
    width: 100,
    backgroundColor: 'purple',
    justifyContent: 'center'
  },
  textStyle: {
    textAlign: 'center',
  }
});

export default BoxScreen;
