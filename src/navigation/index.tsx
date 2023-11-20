import { NavigationContainer } from "@react-navigation/native"
import { MainStack } from "./stack/main_stack"

export const MainNavigator = () => {
    return <NavigationContainer>
        {/* Rest of your app code */}
        <MainStack />
    </NavigationContainer>
}