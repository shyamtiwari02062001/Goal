import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const GoalItem = ({text, deleteGoal, id}) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{color: 'grey'}}
        onPress={deleteGoal.bind(this, id)}>
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};
export default GoalItem;
const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
    fontSize: 20,
    padding: 8,
  },
});
