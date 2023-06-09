import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SwitchToggle({ isOn, toggleSwitch, icons }) {
    return (
        <View style={styles.container}>
            {icons}
            <TouchableOpacity
                style={[
                    styles.outter,
                    isOn ? { justifyContent: 'flex-start' } : { justifyContent: 'flex-end' },
                ]}
                activeOpacity={1}
                onPress={toggleSwitch}
            >
                <View
                    style={[
                        styles.inner,
                        isOn ? { backgroundColor: 'black' } : { backgroundColor: 'black' },
                    ]}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    inner: {
        width: 42,
        height: 28,
        backgroundColor: 'white',
        borderRadius: 15,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.15,
        shadowRadius: 5,
    },
    outter: {
        width: 80,
        height: 30,
        backgroundColor: '#F0F0F0',
        borderRadius: 15,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 2,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
