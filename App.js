import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
const App = () => {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Text>Another text</Text>
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
});
