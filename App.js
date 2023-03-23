import { StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigation from './src/Components/Organisms/BottomNavigation/BottomNavigation';
import ItemDetailScreen from './src/Components/Screens/DetailScreen/ItemDetailScreen';
import MainContextProvider from './src/Context/MainContext';

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'white',
    },
};
const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <MainContextProvider>
            <NavigationContainer theme={MyTheme}>
                <Stack.Navigator>
                    <Stack.Screen
                        name='BottomNavigation'
                        options={{ headerShown: false }}
                        component={BottomNavigation}
                    />
                    <Stack.Screen
                        // options={{ headerShown: false }}
                        name='ItemDetailPage'
                        component={ItemDetailScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </MainContextProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
