import React from 'react';
import {View, TextInput, StyleSheet, Text, Button} from 'react-native';
const App = () => {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your course Goal" />
        <Button title="Add" />
      </View>
      <View>
        <Text>List of Goals....</Text>
      </View>
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'grey',
    width: '80%',
    marginRight: 8,
    padding: 8,
    borderRadius: 10,
  },
});
