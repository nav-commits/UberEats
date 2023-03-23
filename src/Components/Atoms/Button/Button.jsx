import { View } from 'react-native';
import React from 'react';

export default function Button({ icon }) {
    return (
        <View
            style={{
                backgroundColor: 'black',
                borderRadius: 40,
                width: 28,
                height: 28,
                position: 'relative',
                top: 30,
                left: 82,
                zIndex: 100,
            }}
        >
            <View
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    top: 10,
                }}
            >
                {icon}
            </View>
        </View>
    );
}
