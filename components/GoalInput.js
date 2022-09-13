import React, {useState} from 'react';
import {StyleSheet, TextInput, Button, View, Modal, Image} from 'react-native';
const GoalInput = ({addGoal, visible, endAddGoalHandler}) => {
  const [goal, setGoal] = useState('');
  const goalInputHandler = value => {
    setGoal(value);
  };
  const addGoalHandler = () => {
    addGoal(goal);
  };
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        />
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="Your course Goal"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={addGoalHandler} title="Add" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={endAddGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default GoalInput;
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#311b6b',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'grey',
    width: '80%',
    marginRight: 8,
    padding: 8,
    borderRadius: 10,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 10,
    marginTop: 16,
  },
});
