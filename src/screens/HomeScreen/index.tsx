import { Button, Text, View } from "react-native"

export const HomeScreen = ({ navigation }) => {
    return <View style={{ flex: 1 }}>
        <Text>Home screen</Text>
        <Button title='next' onPress={() => navigation.navigate('Item')} />
    </View>
}