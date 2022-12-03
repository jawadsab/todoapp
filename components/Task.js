import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import COLORS from '../Colors';

const TASK_STATE = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
};

const Task = ({ task, onCheck, onDelete }) => {
  return (
    <View style={styles.taskContainer}>
      <View style={styles.taskContainerLeft}>
        <Pressable
          onPress={() => onCheck(task)}
          style={
            task.taskState === TASK_STATE.INACTIVE
              ? [styles.checkbox, styles.checkBoxChecked]
              : [styles.checkbox]
          }
        >
          {task.taskState === TASK_STATE.INACTIVE ? (
            <Feather name="check" size={18} color={COLORS.WHITE} />
          ) : null}
        </Pressable>
        <View style={styles.textContainer}>
          <Text
            style={
              task.taskState === TASK_STATE.INACTIVE
                ? [styles.taskText, styles.strikeThrough]
                : [styles.taskText]
            }
          >
            {task.taskTitle}
          </Text>
        </View>
      </View>
      <Pressable
        onPress={() => onDelete(task.id)}
        style={styles.taskContainerRight}
      >
        <FontAwesome5 name="trash" size={18} color={COLORS.DELETE} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    width: '100%',
    paddingHorizontal: 12,
    paddingVertical: 18,
    borderColor: COLORS.FONTCOLOR_SECONDARY,
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  taskContainerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 28,
    height: 28,
    borderWidth: 1,
    borderColor: COLORS.FONTCOLOR_SECONDARY,
    borderRadius: 14,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkBoxChecked: {
    borderColor: COLORS.CHECKED,
    borderWidth: 2,
    backgroundColor: COLORS.CHECKED,
  },
  textContainer: {
    // width: '75%',
  },
  taskText: {
    flexWrap: 'wrap',
    color: COLORS.FONTCOLOR_PRIMARY,
  },
  strikeThrough: {
    textDecorationLine: 'line-through',
    opacity: 0.5,
  },
  taskContainerRight: {
    marginRight: 8,
  },
});

export default Task;
