import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../../Screens/TabScreens/Home';
import Account from '../../Screens/TabScreens/Account';
import Browse from '../../Screens/TabScreens/Browse';
import Carts from '../../Screens/TabScreens/Carts';

const Tab = createBottomTabNavigator();
export default function BottomNavigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    switch (route.name) {
                        case 'Home':
                            iconName = focused ? 'home' : 'home-outline';
                            break;
                        case 'Browse':
                            iconName = focused ? 'checkmark-circle' : 'checkmark-circle-outline';
                            break;
                        case 'Carts':
                            iconName = focused ? 'heart-circle' : 'heart-circle-outline';
                            break;
                        case 'Account':
                            iconName = focused ? 'bandage' : 'bandage-outline';
                            break;
                        default:
                            break;
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'grey',
            })}
        >
            <Tab.Screen name='Home' options={{ headerShown: false }} component={Home} />
            <Tab.Screen name='Browse' options={{ headerShown: false }} component={Browse} />
            <Tab.Screen options={{ headerShown: false }} name='Carts' component={Carts} />
            <Tab.Screen options={{ headerShown: false }} name='Account' component={Account} />
        </Tab.Navigator>
    );
}
