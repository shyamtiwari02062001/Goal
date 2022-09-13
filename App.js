import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goal => {
    setCourseGoals(currentCourseGoal => [
      ...currentCourseGoal,
      {text: goal, id: Math.random().toString()},
    ]);
  };
  const deleteGoalHandler = id => {
    setCourseGoals(currentCourseGoal => {
      return currentCourseGoal.filter(goal => goal.id !== id);
    });
  };
  return (
    <View style={styles.appContainer}>
      <GoalInput addGoal={addGoalHandler} />
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
