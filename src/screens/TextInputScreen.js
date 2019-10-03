import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextInputScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Enter username:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={username}
        onChangeText={(newValue) => setUsername(newValue)}
      />
      <Text>Enter password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      <Text>My username is {username}</Text>
      { password.length < 5
        ? <Text>Password must be at least 5 characters</Text>
        : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  }
});

export default TextInputScreen;
