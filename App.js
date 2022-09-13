import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
      <Text style={styles.text}>Another text</Text>
      <Button title="Tap me!" />
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    padding: 16,
    borderColor: 'red',
    borderWidth: 2,
    margin: 16,
  },
});
