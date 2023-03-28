import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Button({
    icon,
    backgroundColor,
    borderRadius,
    height,
    width,
    position,
    top,
    left,
    zIndex,
    title,
    color,
    margin,
    padding,
}) {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: backgroundColor,
                borderRadius: borderRadius,
                width: height,
                height: width,
                position: position,
                top: top,
                left: left,
                zIndex: zIndex,
                margin: margin,
                padding: padding,
            }}
        >
            {title && (
                <Text style={{ color: color, textAlign: 'center', fontWeight: 'bold' }}>
                    {title}
                </Text>
            )}
            {icon && (
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
            )}
        </TouchableOpacity>
    );
}
