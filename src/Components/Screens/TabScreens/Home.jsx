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
import { data } from '../../../Data/Restaurants.json';

export default function Home() {
    const [inputs, setInputs] = React.useState('');
    const [isOn, setIsOn] = useState(true);
    const [select, setSelect] = useState(data);

    const toggleSwitch = () => {
        setIsOn((isOn) => !isOn);
    };

    const toggleActive = (item) => {
        const selectedItem = select.map((val) => {
            if (val.id === item.id) {
                return { ...val, Selected: !val.Selected };
            } else {
                return val;
            }
        });
        setSelect(selectedItem);
    };
    return (
        <View>
            {isOn ? (
                <View style={{ marginBottom: 95 }}>
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
                                    <FontAwesome5
                                        name='walking'
                                        size={13}
                                        color={isOn ? 'black' : 'white'}
                                    />
                                </View>
                            }
                        />
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]}>
                        <SearchBar
                            onChangeText={(newText) => setInputs(newText)}
                            value={inputs}
                            placeHolder='Food, groceries, drinks, etc'
                            searchIcon={
                                <View style={styles.searchIconStyling}>
                                    <FontAwesome
                                        name='search'
                                        size={16}
                                        color='hsl(240, 25%, 25%)'
                                    />
                                </View>
                            }
                            filterIcon={
                                <View style={styles.filterIconStyling}>
                                    <Ionicons name='filter' size={16} color='black' />
                                </View>
                            }
                            dividerVerticalLine={<View style={styles.dividerVerticalLineStyling} />}
                        />
                        <SelectTypeContent data={selectLabels} />
                        <RestaurantItemsContent data={select} toggleSwitch={toggleActive} />
                    </ScrollView>
                </View>
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
                                <FontAwesome5
                                    name='walking'
                                    size={13}
                                    color={isOn ? 'black' : 'white'}
                                />
                            </View>
                        }
                    />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
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
    searchIconStyling: {
        position: 'relative',
        left: 40,
        elevation: 3,
        zIndex: 5,
    },
    filterIconStyling: {
        position: 'relative',
        right: 45,
        elevation: 3,
        zIndex: 5,
    },
    dividerVerticalLineStyling: {
        position: 'relative',
        borderColor: 'grey',
        right: 55,
        height: 30,
        borderLeftWidth: 1,
    },
});
