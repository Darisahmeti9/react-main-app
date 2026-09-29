import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Bird from './src/components/Bird';
import Obstacles from './src/components/Obstacle';

export default function App() {
  return (
    <View style={styles.container}>
       <Obstacles/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
