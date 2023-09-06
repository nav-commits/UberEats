import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function SwitchToggle({ isOn, toggleSwitch }) {
    return (
        <TouchableOpacity onPress={toggleSwitch}>
            <View style={[styles.container, isOn ? styles.onContainer : styles.offContainer]}>
                <View style={[styles.thumb, isOn ? styles.onThumb : styles.offThumb]} />
                <MaterialCommunityIcons
                    name={isOn ? 'shopping' : 'shopping-outline'}
                    size={13}
                    color={isOn ? 'black' : 'white'}
                    style={{ position: 'relative', right: '30px', zIndex: 1000 }}
                />
                <FontAwesome5
                    name='walking'
                    size={13}
                    color={isOn ? 'white' : 'black'}
                    style={{ position: 'relative', zIndex: 1000,left: '5px' }}
                />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 75,
        height: 32,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 4,
        marginTop: 10,
    },
    onContainer: {
        backgroundColor: 'rgb(240, 240, 240)',
    },
    offContainer: {
        backgroundColor: 'rgb(240, 240, 240)',
    },
    thumb: {
        width: 35,
        height: 30,
        borderRadius: 25,
        backgroundColor: 'black',
        padding: 0,
    },
    onThumb: {
        transform: [{ translateX: 40 }],
    },
    offThumb: {
        transform: [{ translateX: -3 }],
    },
});
