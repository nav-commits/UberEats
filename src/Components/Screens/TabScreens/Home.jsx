import { View, Text, ScrollView, StyleSheet, StatusBar } from 'react-native';
import React, { useState } from 'react';
import SearchBar from '../../Atoms/SearchBar/SearchBar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SelectTypeContent from '../../Organisms/SelectTypeContent/SelectTypeContent';
import { selectLabels } from '../../../Utils/Labels';
import SwitchToggle from '../../Atoms/SwitchToggle/SwitchToggle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import RestaurantItemsContent from '../../Organisms/RestaurantsItemsContent/RestaurantItemsContent';
export default function Home() {
    const [inputs, setInputs] = React.useState('');
    const [isOn, setIsOn] = useState(true);

    const toggleSwitch = () => {
        setIsOn((isOn) => !isOn);
    };

    return (
        <View>
            {isOn ? (
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.parentContainer}
                >
                    <StatusBar />
                    <View style={styles.textContainer}>
                        <View style={{ padding: 10 }}>
                            <Text style={styles.deliverAddress}>Deliver now</Text>
                            <Text style={styles.streetAddressStyle}>123 Oak Street</Text>
                        </View>

                        <SwitchToggle
                            isOn={isOn}
                            toggleSwitch={toggleSwitch}
                            icons={
                                <View style={styles.iconContainer}>
                                    <MaterialCommunityIcons
                                        name={isOn ? 'shopping' : 'shopping-outline'}
                                        size={13}
                                        color={isOn ? 'white' : 'black'}
                                    />
                                    <FontAwesome5 name='walking' size={13} color={isOn ? 'black' : 'white'} />
                                </View>
                            }
                        />
                    </View>

                    <SearchBar
                        onChangeText={(newText) => setInputs(newText)}
                        value={inputs}
                        placeHolder='Food, groceries, drinks, etc'
                        searchIcon={
                            <View
                                style={{ position: 'relative', left: 40, elevation: 3, zIndex: 5 }}
                            >
                                <FontAwesome name='search' size={16} color='hsl(240, 25%, 25%)' />
                            </View>
                        }
                        filterIcon={
                            <View
                                style={{ position: 'relative', right: 45, elevation: 3, zIndex: 5 }}
                            >
                                <Ionicons name='filter' size={16} color='black' />
                            </View>
                        }
                        dividerVerticalLine={
                            <View
                                style={{
                                    position: 'relative',
                                    borderColor: 'grey',
                                    right: 55,
                                    height: 30,
                                    borderLeftWidth: 1,
                                }}
                            />
                        }
                    />
                    <SelectTypeContent data={selectLabels} />
                    <RestaurantItemsContent />
                </ScrollView>
            ) : (
                <View style={styles.textContainer}>
                    <View style={{ padding: 10 }}>
                        <Text style={styles.deliverAddress}>PickUp Now</Text>
                        <Text style={styles.streetAddressStyle}>Near 123 Oak Street</Text>
                    </View>

                    <SwitchToggle
                        isOn={isOn}
                        toggleSwitch={toggleSwitch}
                        icons={
                            <View style={styles.iconContainer}>
                                <MaterialCommunityIcons
                                    name={isOn ? 'shopping' : 'shopping-outline'}
                                    size={13}
                                    color={isOn ? 'white' : 'black'}
                                />
                                <FontAwesome5 name='walking' size={13} color={isOn ? 'black' : 'white'} />
                            </View>
                        }
                    />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    parentContainer: {

    },
    deliverAddress: {
        fontSize: 12,
        color: 'grey',
    },
    streetAddressStyle: {
        fontSize: 12,
        color: 'black',
        fontWeight: 'bold',
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20,
        position: 'relative',
        top: 20,
        zIndex: 20,
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap: 180,
        backgroundColor: 'white',
    },
});
