import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, ItemScreen } from '../../screens';
import { useAppDispatch, useAppSelector } from '../../redux/types';
import { addFavorite, removeFavorite } from '../../redux/slices';
import { Icons } from '../../assets';
import { Person } from '../../models/Person';

const Stack = createNativeStackNavigator();

export const MainStack = () => {
    const dispatch = useAppDispatch();

    const favorites = useAppSelector((state) => state.favorites.people);

    const onSetFavorite = (person: Person) => {
        dispatch(addFavorite({
            id: person.id,
            name: person.name,
            gender: person.gender
        }));
    }

    const onRemoveFavorite = (id: number) => {
        dispatch(removeFavorite(id));
    }
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
                name="Item"
                component={ItemScreen}
                options={({ route }) => ({
                    title: route.params.person.name,
                    headerRight: () => {
                        const person = route.params.person;
                        const isFavorite = !!favorites.filter(e => e.id === person.id).length;
                        return <TouchableOpacity
                            onPress={!isFavorite
                                ? onSetFavorite.bind(null, person)
                                : onRemoveFavorite.bind(null, person.id)}
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}

                        >{isFavorite
                            ? <Icons.Heart />
                            : <Icons.HeartOutlined />
                            }</TouchableOpacity>
                    }
                })}
            />
        </Stack.Navigator>
    );
}