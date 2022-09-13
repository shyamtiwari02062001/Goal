import React, {useState} from 'react';
import {StyleSheet, TextInput, Button, View, Modal} from 'react-native';
const GoalInput = ({addGoal, visible}) => {
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
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="Your course Goal"
        />
        <Button onPress={addGoalHandler} title="Add" />
      </View>
    </Modal>
  );
};
export default GoalInput;
const styles = StyleSheet.create({
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
});
