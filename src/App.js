import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListBooks from './screen/ListBooks'
import BookDetails from './screen/BookDetails'

const Stack = createStackNavigator();

const App = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="ListBooks" component={ListBooks}></Stack.Screen>
                <Stack.Screen name="BookDetails" component={BookDetails}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;