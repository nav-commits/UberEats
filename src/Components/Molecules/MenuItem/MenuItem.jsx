import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
export default function MenuItem({ data }) {
    return (
        <View>
            {data.map((item, i) => (
                <View
                    key={i}
                    style={{
                        justifyContent: 'space-evenly',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 110,
                    }}
                >
                    <View>
                        <Text style={styles.textStyle}>{item.title}</Text>
                        <Text>{item.calories}</Text>
                        <Text>${item.price}</Text>
                    </View>
                    <Image
                        source={{
                            uri: item.img,
                        }}
                        style={{ height: 90, width: 85, backgroundColor: '#F0F0F0', padding: 20 }}
                    />
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    parentContainer: {
        backgroundColor: 'white',
    },
    textStyle: {
        fontSize: 13,
        fontWeight: 'bold',
    }
});
