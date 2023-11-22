import { ActivityIndicator, FlatList, TextInput, View } from "react-native"
import { RootState, useAppDispatch, useAppSelector } from "../../redux/types"
import { FC, useEffect, useMemo, useState } from "react";
import { fetchPeople } from "../../redux/thunk/people.thunk";
import throttle from 'lodash.throttle'
import { ListItem, ListFooter, ListHeader } from "./components";
import { addFavorite, removeFavorite, resetFavorite } from "../../redux/slices";
import { Input, InputContainer, ListStyle, LoaderContainer } from "./styled";
import React from "react";
import { Person } from "../../models/Person";

export const HomeScreen: FC<{ navigation: any }> = ({ navigation }) => {

    const [query, setQuery] = useState<string>('');

    const dispatch = useAppDispatch();

    const favorites = useAppSelector((state) => state.favorites.people);

    const { people, isLoading, page } = useAppSelector((state) => state.people);

    const throttledDispatch = throttle(() => {
        dispatch(fetchPeople())
    }, 1000, { leading: true })

    useEffect(() => {
        throttledDispatch();
    }, [])

    const onClear = () => {
        dispatch(resetFavorite());
    }

    const onSetFavorite = (person: Person) => {
        dispatch(addFavorite({
            id: person.id,
            gender: person.gender,
            name: person.name
        }));
    }

    const onRemoveFavorite = (id: number) => {
        dispatch(removeFavorite(id));
    }

    const filteredPeople: Person[] = useMemo(() => {
        return people.filter(person => person.name.includes(query))
    }, [people, query])

    if (isLoading && !people.length) {
        return <LoaderContainer>
            <ActivityIndicator />
        </LoaderContainer>
    }
    return <>
        <InputContainer>
            <Input>
                <TextInput
                    placeholder="Search"
                    value={query}
                    onChangeText={setQuery}
                    style={{ fontSize: 16, height: 30, }}
                />
            </Input>
        </InputContainer>
        <FlatList
            contentContainerStyle={ListStyle}
            ListHeaderComponent={() => <ListHeader
                favorites={favorites}
                people={people}
                onClear={onClear}
            />}
            renderItem={({ item }) => {
                const isFavorite = !!favorites.filter(e => e.id === item.id).length;
                return <ListItem
                    id={item.id}
                    gender={item.gender}
                    name={item.name}
                    birth_year={item.birth_year}
                    setFavorite={!isFavorite
                        ? onSetFavorite.bind(null, item)
                        : onRemoveFavorite.bind(null, item.id)
                    }
                    isFavorite={isFavorite}
                    onPress={() => { navigation.navigate('Item', { person: item }) }}
                />
            }}
            data={filteredPeople}
            keyExtractor={(e) => e.id.toString()}
            ListFooterComponent={() => <ListFooter people={people} isLoading={isLoading} loadMore={throttledDispatch} />}

        />
    </>
}