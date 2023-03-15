import { View, Text, ScrollView, StyleSheet, TextInput } from 'react-native';
import React from 'react';
export default function SearchBar({ onChangeText, value, icon, placeHolder, marginRight }) {
    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: marginRight,
            }}
        >
            {icon}
            <TextInput
                onChangeText={onChangeText}
                value={value}
                placeholder={placeHolder}
                selectionColor={'black'}
                style={{
                    height: 40,
                    margin: 12,
                    borderWidth: 1,
                    paddingLeft: 30,
                    borderRadius: 18,
                    color: 'black',
                    minWidth: 320,
                    borderColor:'#F0F0F0',
                    backgroundColor: '#F0F0F0',
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({});
