import React, { FC, memo, useMemo } from "react";
import ButtonOutlined from "../../../../components/ButtonOutlined";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import {
    ColumnTop,
    ColumnTopContainer,
    ControlsContainer,
    TitleContainer,
    TitleText
} from "./styled";
import { TListHeader } from "./types";

export const ListHeader: FC<TListHeader> = memo(({ people, onClear, favorites }) => {
    const { femaleCount, maleCount, otherCount } = useMemo(() => {
        const maleCount = favorites.filter(e => e.gender === 'male').length;
        const femaleCount = favorites.filter(e => e.gender === 'female').length;
        const otherCount = favorites.length - maleCount - femaleCount;
        return {
            maleCount,
            femaleCount,
            otherCount
        }
    }, [])
    return <>
        <ColumnTopContainer>
            <ColumnTop flex={1 / 3} separator={true} >
                <Text>Female: {femaleCount}</Text>
            </ColumnTop>
            <ColumnTop flex={1 / 3} separator={true} >
                <Text>Male: {maleCount}</Text>
            </ColumnTop>
            <ColumnTop flex={1 / 3} separator={false}>
                <Text>Other: {otherCount}</Text>
            </ColumnTop>
        </ColumnTopContainer>
        <ControlsContainer>
            <TitleContainer>
                <TitleText>Fans</TitleText>
            </TitleContainer>
            <ButtonOutlined onPress={onClear} title="Clear all" />
        </ControlsContainer>
        {Boolean(people.length) && <ColumnTopContainer>
            <View style={{ flex: 1 / 7 }}></View>
            <ColumnTop flex={2 / 3} separator={true} >
                <Text>Name</Text>
            </ColumnTop>
            <ColumnTop flex={2 / 5} separator={true} >
                <Text>Male</Text>
            </ColumnTop>
            <ColumnTop flex={2 / 5} separator={false}>
                <Text>Other</Text>
            </ColumnTop>
        </ColumnTopContainer>}
    </>
}, (prev, next) => {
    return prev.people.length !== next.people.length || prev.query !== next.query
})