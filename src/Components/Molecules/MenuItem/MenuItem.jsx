import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
export default function MenuItem({ data, onPress }) {
    return (
        <View>
            {data.map((item, i) => (
                <TouchableOpacity
                    key={i}
                    style={{
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: 10
                    }}
                    onPress={() => onPress(item.id,item.title)}
                >
                    <View>
                        <Text style={styles.textStyle}>{item.title}</Text>
                        {item?.calories && <Text>{item?.calories}</Text>}
                        {item?.description && (
                            <Text style={{ width: 250, color: 'grey', fontSize: 13 }}>
                                {item?.description}
                            </Text>
                        )}
                        <Text>${item.price}</Text>
                    </View>
                    <Image
                        source={{
                            uri: item.img,
                        }}
                        style={{ height: 90, width: 85, backgroundColor: '#F0F0F0', padding: 20 }}
                    />
                </TouchableOpacity>
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
    },
});
