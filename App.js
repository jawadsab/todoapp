import { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Pressable,
  Text,
  ScrollView,
} from 'react-native';
import COLORS from './Colors';
import Task from './components/Task';
import Title from './components/Title';
import TaskClass from './TaskClass';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [tasks, setTasks] = useState([]);
  const onAddTask = () => {
    setTasks((prevArr) => [...prevArr, new TaskClass(inputText)]);
    setInputText('');
  };
  const onToggleTaskState = (selectedTask) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === selectedTask.id) {
        if (task.taskState === 'ACTIVE') {
          task.taskState = 'INACTIVE';
        } else {
          task.taskState = 'ACTIVE';
        }
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const onDeleteTask = (taskID) => {
    const filteredTask = tasks.filter((task) => task.id !== taskID);
    setTasks(filteredTask);
  };
  return (
    <View style={styles.appContainer}>
      <Title>Today's Tasks</Title>
      <ScrollView style={styles.taskList}>
        {tasks &&
          tasks.map((task) => (
            <Task
              onCheck={onToggleTaskState}
              onDelete={onDeleteTask}
              key={task.id}
              task={task}
            />
          ))}
      </ScrollView>
      <View style={styles.taskInputContainer}>
        <TextInput
          value={inputText}
          onChangeText={(text) => setInputText(text)}
          style={styles.textInput}
          placeholder="Task"
        />
        <Pressable onPress={onAddTask} style={styles.floatingBtn}>
          <View style={styles.addBtnContainer}>
            <Text style={styles.addBtnText}>+</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND_PRIMARY,
  },
  taskList: {
    padding: 8,
  },
  taskInputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12,
  },
  textInput: {
    width: '75%',
    height: 54,
    backgroundColor: COLORS.WHITE,
    // margin: 12,
    padding: 8,
    borderRadius: 12,
  },
  floatingBtn: {
    marginLeft: 12,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.WHITE,
    width: 54,
    borderRadius: 27,
  },
  addBtnContainer: {},
  addBtnText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});
