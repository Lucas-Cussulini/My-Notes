import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ChangeNotes from '../screens/ChangeNotes';
import ShowNotes from '../screens/ShowNotes';
import EditNotes from '../screens/EditNotes';



const Stack = createNativeStackNavigator();

const Router = () => {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: false}}/>

            <Stack.Screen
              name="ChangeNotes"
              component={ChangeNotes}
              options={{headerShown: false}} />

            <Stack.Screen
              name="ShowNotes"
              component={ShowNotes}
              options={{headerShown: false}} />

            <Stack.Screen
              name="EditNotes"
              component={EditNotes}
              options={{headerShown: false}} />

          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  };
  
  export default Router;