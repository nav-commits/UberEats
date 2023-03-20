import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
export default function RestaurantItemsContent({ data, toggleSwitch, isActive }) {
    return (
        <View style={{ backgroundColor: 'white', marginTop: 10, padding: 15 }}>
            {data.map((item, i) => (
                <View key={i}>
                    <Image
                        source={{
                            uri: item.img,
                        }}
                        style={{ width: '100%', height: 180, marginTop: 10 }}
                    />
                    <TouchableOpacity
                        style={{ position: 'absolute', right: 20, top: 20 }}
                        onPress={toggleSwitch}
                    >
                        <MaterialCommunityIcons
                            name={isActive ? 'cards-heart' : 'cards-heart-outline'}
                            size={20}
                            color='white'
                        />
                    </TouchableOpacity>
                    <View style={styles.contentContainer}>
                        <View>
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                                    {item.name}
                                </Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                                    {' '}
                                    {item.location}
                                </Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                                <Text style={{ fontSize: 10, color: 'gray' }}>
                                    ${item.deliveryDetails.deliveryCost}{' '}
                                    {item.deliveryDetails.deliveryFee}
                                </Text>
                                <Text style={{ fontSize: 10, color: 'gray' }}>
                                    {item.deliveryDetails.time}
                                </Text>
                            </View>
                        </View>

                        <View style={styles.ratingStyle}>
                            <Text style={{ fontSize: 10, color: 'black' }}>{item.rating}</Text>
                        </View>
                    </View>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    parentContainer: {
        paddingVertical: 20,
        backgroundColor: 'white',
    },
    ratingStyle: {
        backgroundColor: '#F0F0F0',
        borderRadius: 15,
        alignItems: 'center',
        height: 25,
        width: 25,
        justifyContent: 'center',
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap: 130,
    },
});
