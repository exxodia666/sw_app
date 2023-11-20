import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, ItemScreen } from '../../screens';

const Stack = createNativeStackNavigator();

export const MainStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Item" component={ItemScreen} />
        </Stack.Navigator>
    );
}