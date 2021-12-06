import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from './App';
import nextpage from './nextpage';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="App"
          component={App}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="nextpage" component={nextpage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;
