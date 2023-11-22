import React, { FC } from "react";
import { ItemColumn, ItemContainer } from "./styled";
import { Text, TouchableOpacity } from "react-native";
import { Icons } from "../../../../assets";

export const ListItem: FC<{
    id: number,
    name: string,
    birth_year: string,
    gender: string,
    isFavorite: boolean,
    onPress: () => void,
    setFavorite: () => void
}> = ({ id, name, birth_year, gender, onPress, setFavorite, isFavorite }) => {
    return <ItemContainer onPress={onPress} key={id}>
        <TouchableOpacity onPress={setFavorite} style={{ flex: 1 / 7, justifyContent: 'center', alignItems: 'center' }}>
            {isFavorite ? <Icons.Heart /> : <Icons.HeartOutlined />}
        </TouchableOpacity>
        <ItemColumn flex={2 / 3} separator={true} >
            <Text numberOfLines={1} ellipsizeMode="tail">{name}</Text>
        </ItemColumn>
        <ItemColumn flex={2 / 5} separator={true} >
            <Text numberOfLines={1} ellipsizeMode="tail">{birth_year}</Text>
        </ItemColumn>
        <ItemColumn flex={2 / 5} separator={false}>
            <Text numberOfLines={1} ellipsizeMode="tail" >{gender}</Text>
        </ItemColumn>
    </ItemContainer>

}