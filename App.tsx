import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import NewTimerScreen from './src/screens/NewTimerScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='HomeScreen'
            component={HomeScreen}
          />
          <Stack.Screen
            name='NewTimerScreen'
            component={NewTimerScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
