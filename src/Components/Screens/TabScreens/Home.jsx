import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import SearchBar from '../../Atoms/SearchBar/SearchBar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SelectTypeContent from '../../Organisms/SelectTypeContent/SelectTypeContent';
import { selectLabels } from '../../../Utils/Labels';
import SwitchToggle from '../../Atoms/SwitchToggle/SwitchToggle';

export default function Home() {
    const [inputs, setInputs] = React.useState('');
    const [isOn, setIsOn] = useState(true);

    const toggleSwitch = () => {
        setIsOn((isOn) => !isOn);
    };

    return (
        <View>
            {isOn ? (
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        gap: 180,
                        paddingVertical: 20,
                        backgroundColor: 'white',
                    }}
                >
                    <View style={{ padding: 10 }}>
                        <Text style={styles.deliverAddress}>PickUp Now</Text>
                        <Text style={styles.streetAddressStyle}>123 Oak Street</Text>
                    </View>

                    <SwitchToggle isOn={isOn} toggleSwitch={toggleSwitch} />
                </View>
            ) : (
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.parentContainer}
                >
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            gap: 180,
                        }}
                    >
                        <View style={{ padding: 10 }}>
                            <Text style={styles.deliverAddress}>Deliver now</Text>
                            <Text style={styles.streetAddressStyle}>123 Oak Street</Text>
                        </View>

                        <SwitchToggle isOn={isOn} toggleSwitch={toggleSwitch} />
                    </View>

                    <SearchBar
                        onChangeText={(newText) => setInputs(newText)}
                        value={inputs}
                        placeHolder='Food, groceries, drinks, etc'
                        marginRight={10}
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
                </ScrollView>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    parentContainer: {
        paddingVertical: 20,
        backgroundColor: 'white',
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
});
