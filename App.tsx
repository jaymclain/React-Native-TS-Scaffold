import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  const [name] = useState('World');

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello {name}!</Text>
      <Text style={styles.greeting}>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default App;
