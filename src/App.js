import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ListBooks from './screen/ListBooks'
import BookDetails from './screen/BookDetails'
import ListFavoriteBook from './screen/ListFavoriteBooks';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="ListBooks" component={ListBooks} options={{title: 'All Books'}}></Stack.Screen>
            <Stack.Screen name="BookDetails" component={BookDetails} options={{title: 'Book Detail'}}></Stack.Screen>
        </Stack.Navigator>
    )
}

const FavoriteScreen = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="ListFavoriteBook" component={ListFavoriteBook} options={{title: 'Favorite Books'}}></Stack.Screen>
            <Stack.Screen name="BookDetails" component={BookDetails} options={{title: 'Book Detail'}}></Stack.Screen>
        </Stack.Navigator>
    )
}

const App = () =>{
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen options={{ headerShown: false }} name={'Home'} component={HomeScreen}/>
                <Tab.Screen options={{ headerShown: false }} name={'Favorites'} component={FavoriteScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default App;