import { ActivityIndicator, ScrollView, Text, View } from "react-native"
import { Person } from "../../models/Person";
import React, { useEffect, useState } from "react";
import { Container, ItemColumn, ItemContainer } from "./styled";
import { axiosService } from "../../services/axios.service";
import { Film } from "../../models/Film";

export const ItemScreen = ({ route }) => {

    const person: Person = route.params.person as Person;

    const [films, setFilms] = useState<Array<Film>>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const fetchFilms = async () => {
        setIsLoading(true)
        const promises = person.films.map(e => {
            return axiosService.get(e);
        })
        const filmsRes = await Promise.all(promises);
        setIsLoading(false);
        setFilms(filmsRes.map(e => e.data));
    }

    useEffect(() => {
        fetchFilms();
    }, [])

    return <ScrollView style={{ flex: 1, padding: 10 }}>
        <Container>
            <ItemContainer>
                <ItemColumn flex={1 / 2} separator={true} >
                    <Text numberOfLines={1} ellipsizeMode="tail">Birth year</Text>
                </ItemColumn>
                <ItemColumn flex={1 / 2} separator={false} >
                    <Text numberOfLines={1} ellipsizeMode="tail">{person.birth_year}</Text>
                </ItemColumn>
            </ItemContainer>

            <ItemContainer>
                <ItemColumn flex={1 / 2} separator={true} >
                    <Text numberOfLines={1} ellipsizeMode="tail">Eye color</Text>
                </ItemColumn>
                <ItemColumn flex={1 / 2} separator={false} >
                    <Text numberOfLines={1} ellipsizeMode="tail">{person.eye_color}</Text>
                </ItemColumn>
            </ItemContainer>

            <ItemContainer>
                <ItemColumn flex={1 / 2} separator={true} >
                    <Text numberOfLines={1} ellipsizeMode="tail">Gender</Text>
                </ItemColumn>
                <ItemColumn flex={1 / 2} separator={false} >
                    <Text numberOfLines={1} ellipsizeMode="tail">{person.gender}</Text>
                </ItemColumn>
            </ItemContainer>

            <ItemContainer>
                <ItemColumn flex={1 / 2} separator={true} >
                    <Text numberOfLines={1} ellipsizeMode="tail">Hair Color</Text>
                </ItemColumn>
                <ItemColumn flex={1 / 2} separator={false} >
                    <Text numberOfLines={1} ellipsizeMode="tail">{person.hair_color}</Text>
                </ItemColumn>
            </ItemContainer>

            <ItemContainer>
                <ItemColumn flex={1 / 2} separator={true} >
                    <Text numberOfLines={1} ellipsizeMode="tail">Height</Text>
                </ItemColumn>
                <ItemColumn flex={1 / 2} separator={false} >
                    <Text numberOfLines={1} ellipsizeMode="tail">{person.height}</Text>
                </ItemColumn>
            </ItemContainer>

            <Text style={{ fontSize: 18, paddingVertical: 10 }}>Films:</Text>

            {
                isLoading ? <ActivityIndicator /> :
                    films.map(e => {
                        return <Container style={{ paddingBottom: 10 }}>
                            <ItemContainer>
                                <ItemColumn flex={1 / 2} separator={true} >
                                    <Text numberOfLines={1} ellipsizeMode="tail">Title</Text>
                                </ItemColumn>
                                <ItemColumn flex={1 / 2} separator={false} >
                                    <Text numberOfLines={1} ellipsizeMode="tail">{e.title}</Text>
                                </ItemColumn>
                            </ItemContainer>
                            <ItemContainer>
                                <ItemColumn flex={1 / 2} separator={true} >
                                    <Text numberOfLines={1} ellipsizeMode="tail">Director</Text>
                                </ItemColumn>
                                <ItemColumn flex={1 / 2} separator={false} >
                                    <Text numberOfLines={1} ellipsizeMode="tail">{e.director}</Text>
                                </ItemColumn>
                            </ItemContainer>
                        </Container>
                    })}
        </Container>
    </ScrollView>
}