import { View, TouchableOpacity} from 'react-native';
import React from 'react';
export default function SelectType({ typeItem, Image, bottomText, width, backgroundColor }) {
    return (
        <TouchableOpacity>
            <View
                style={{
                    padding: 3,
                    backgroundColor: backgroundColor,
                    width: width,
                    borderRadius: 10,
                    marginLeft: 20
                }}
            >
                {Image}
                {typeItem}
            </View>
            {bottomText}
        </TouchableOpacity>
    );
}
