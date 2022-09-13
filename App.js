import React from 'react';
import {View, TextInput, StyleSheet, Text, Button} from 'react-native';
const App = () => {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your course Goal" />
        <Button title="Add" />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of Goals....</Text>
      </View>
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'grey',
    width: '80%',
    marginRight: 8,
    padding: 8,
    borderRadius: 10,
  },
  goalsContainer: {
    flex: 5,
  },
});
