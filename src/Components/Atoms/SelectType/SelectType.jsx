import { View, StyleSheet,Text} from 'react-native';
import React from 'react';
export default function SelectType({ typeItem, Image, bottomText, width }) {
    return (
        <View>
            <View
                style={{
                    padding: 3,
                    backgroundColor: '#F0F0F0',
                    width: width,
                    borderRadius: 10,
                    marginLeft: 20
                }}
            >
                {Image}
                {typeItem}
            </View>
            {bottomText}
        </View>
        
    );
}

const styles = StyleSheet.create({});
