import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../../Screens/TabScreens/Home';
import Account from '../../Screens/TabScreens/Account';
import Browse from '../../Screens/TabScreens/Browse';
import Baskets from '../../Screens/TabScreens/Baskets';

const Tab = createBottomTabNavigator();
export default function BottomNavigation() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    switch (route.name) {
                        case 'Home':
                            iconName = <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />
                            break;
                        case 'Browse':
                            iconName = <MaterialCommunityIcons name={focused ? 'file-search' : 'file-search-outline'} size={size} color={color} />
                            break;
                        case 'Baskets':
                            iconName = <Ionicons name={focused ? 'cart' : 'cart-outline'} size={size} color={color} />
                            break;
                        case 'Account':
                            iconName = <Ionicons name={focused ? 'person' : 'person-outline'} size={size} color={color} />
                            break;
                        default:
                            break;
                    }
                    return iconName;
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'grey',
            })}
        >
            <Tab.Screen name='Home' options={{ headerShown: false }} component={Home} />
            <Tab.Screen name='Browse' options={{ headerShown: false }} component={Browse} />
            <Tab.Screen options={{ headerShown: false }} name='Baskets' component={Baskets} />
            <Tab.Screen options={{ headerShown: false }} name='Account' component={Account} />
        </Tab.Navigator>
    );
}
