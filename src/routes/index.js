import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Home from '../screens/Home/index'
import Details from '../screens/Details'

export default function Routes(){

    const stack = createStackNavigator();

    return(

        <NavigationContainer>
            <stack.Navigator>

            <stack.Screen name ='home' component ={Home}/>

            </stack.Navigator>

        </NavigationContainer>

    )

}