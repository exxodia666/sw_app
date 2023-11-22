import React, { FC } from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import { Person } from "../../../../models/Person";

export const ListFooter: FC<{
    people: Person[],
    isLoading: boolean,
    loadMore: () => void
}> = ({ people, isLoading, loadMore }) => people.length ? <TouchableOpacity
    onPress={!isLoading ? loadMore : () => { }}
    style={{
        height: 50,
        alignItems: 'center',
        justifyContent: 'center', borderColor: 'rgba(255, 42, 36, 0.78)',
        borderWidth: 1,
        width: 300,
        alignSelf: 'center',
        marginTop: 10,
        borderRadius: 5
    }}>
    {isLoading ? <ActivityIndicator /> : <Text style={{ color: 'rgba(255, 42, 36, 0.78)' }}>Show more</Text>}
</TouchableOpacity> : null