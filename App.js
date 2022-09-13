import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Button,
  FlatList,
} from 'react-native';
const App = () => {
  const [goal, setGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const goalInputHandler = value => {
    setGoal(value);
  };
  const addGoalHandler = () => {
    setCourseGoals(currentCourseGoal => [...currentCourseGoal, goal]);
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={value => {
            goalInputHandler(value);
          }}
          style={styles.textInput}
          placeholder="Your course Goal"
        />
        <Button onPress={() => addGoalHandler()} title="Add" />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={courseGoals}
          renderItem={itemData => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item}</Text>
              </View>
            );
          }}
        />
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
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    padding: 8,
  },
  goalText: {
    color: 'white',
    fontSize: 20,
  },
});
