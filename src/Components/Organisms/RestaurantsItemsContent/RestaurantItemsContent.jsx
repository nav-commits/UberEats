import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useState } from 'react';
export default function RestaurantItemsContent() {
    const [isActive, setIsActive] = useState(true);

    const toggleActive = () => {
        setIsActive((isActive) => !isActive);
    };
    return (
        <View style={{ backgroundColor: 'white', marginTop: 10, padding: 15 }}>
            <Image
                source={{
                    uri: 'https://tb-static.uber.com/prod/image-proc/processed_images/82b8e3c661cfd7efc2ceb33005143018/c73ecc27d2a9eaa735b1ee95304ba588.jpeg',
                }}
                style={{ width: '100%', height: 180, marginBottom: 10 }}
            />
            <TouchableOpacity
                style={{ position: 'absolute', right: 20, top: 20 }}
                onPress={toggleActive}
            >
                <MaterialCommunityIcons
                    name={isActive ? 'cards-heart-outline' : 'cards-heart'}
                    size={20}
                    color='white'
                />
            </TouchableOpacity>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    gap: 130,
                }}
            >
                <View>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Dollarma</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>(McLaughin corners)</Text>
                    </View>

                    <Text style={{ fontSize: 10, color: 'gray' }}>25 - 40 . min</Text>
                </View>

                <View
                    style={{
                        backgroundColor: '#F0F0F0',
                        borderRadius: 15,
                        alignItems: 'center',
                        height: 25,
                        width: 25,
                        justifyContent: 'center',
                    }}
                >
                    <Text style={{ fontSize: 10, color: 'black' }}>4.5</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    parentContainer: {
        paddingVertical: 20,
        backgroundColor: 'white',
    },
});
