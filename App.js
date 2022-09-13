import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Button} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const addGoalHandler = goal => {
    setCourseGoals(currentCourseGoal => [
      ...currentCourseGoal,
      {text: goal, id: Math.random().toString()},
    ]);
    setModalVisible(false);
  };
  const deleteGoalHandler = id => {
    setCourseGoals(currentCourseGoal => {
      return currentCourseGoal.filter(goal => goal.id !== id);
    });
  };
  const startAddGoalHandler = () => {
    setModalVisible(true);
  };
  const endAddGoalHandler = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.appContainer}>
      <Button
        title={'Add new Goal'}
        color="#5e0acc"
        onPress={() => startAddGoalHandler()}
      />
      {isModalVisible && (
        <GoalInput
          visible={isModalVisible}
          endAddGoalHandler={endAddGoalHandler}
          addGoal={addGoalHandler}
        />
      )}
      <View style={styles.goalsContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={courseGoals}
          renderItem={itemData => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                deleteGoal={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
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
  goalsContainer: {
    flex: 5,
  },
});
