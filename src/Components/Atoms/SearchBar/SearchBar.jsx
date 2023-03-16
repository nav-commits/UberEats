import { View, TextInput } from 'react-native';
import React from 'react';
export default function SearchBar({ onChangeText, value, searchIcon, placeHolder, marginRight, filterIcon, dividerVerticalLine }) {
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
            {searchIcon}
            <TextInput
                onChangeText={onChangeText}
                value={value}
                placeholder={placeHolder}
                selectionColor={'black'}
                style={{
                    height: 40,
                    margin: 12,
                    borderWidth: 1,
                    paddingLeft: 40,
                    borderRadius: 18,
                    color: 'black',
                    minWidth: 320,
                    borderColor:'#F0F0F0',
                    backgroundColor: '#F0F0F0',
                }}
            />
            {dividerVerticalLine}
            {filterIcon}
        </View>
    );
}
