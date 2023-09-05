import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function SwitchToggle({ isOn, toggleSwitch, icons }) {
    return (
        <View style={styles.container}>
            {icons}
            <TouchableOpacity
                style={[
                    styles.outer,
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
    outer: {
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
