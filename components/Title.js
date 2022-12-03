import { View, Text, StyleSheet } from 'react-native';
import COLORS from '../Colors';

const Title = ({ children }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    width: '100%',
    padding: 15,
    marginTop: 32
    
  },
  titleText: {
    color: COLORS.FONTCOLOR_PRIMARY,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Title;
