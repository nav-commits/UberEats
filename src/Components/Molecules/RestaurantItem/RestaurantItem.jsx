import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
export default function RestaurantItem({
    img,
    isActive,
    name,
    location,
    deliveryCost,
    deliveryFee,
    time,
    rating,
    toggleSwitch,
}) {
    return (
        <TouchableOpacity>
            <Image
                source={{
                    uri: img,
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
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{name}</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}> {location}</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                        <Text style={{ fontSize: 10, color: 'gray' }}>
                            ${deliveryCost} {deliveryFee}
                        </Text>
                        <Text style={{ fontSize: 10, color: 'gray' }}>{time}</Text>
                    </View>
                </View>

                <View style={styles.ratingStyle}>
                    <Text style={{ fontSize: 10, color: 'black' }}>{rating}</Text>
                </View>
            </View>
        </TouchableOpacity>
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
