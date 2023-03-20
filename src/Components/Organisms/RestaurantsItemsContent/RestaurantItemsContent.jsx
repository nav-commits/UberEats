import { View,StyleSheet } from 'react-native';
import React from 'react';
import RestaurantItem from '../../Molecules/RestaurantItem/RestaurantItem';

export default function RestaurantItemsContent({ data, toggleSwitch, isActive }) {
    return (
        <View style={{ backgroundColor: 'white', marginTop: 10, padding: 15 }}>
            {data.map((item, i) => (
                <View key={i}>
                    <RestaurantItem
                        img={item.img}
                        isActive={isActive}
                        name={item.name}
                        location={item.location}
                        deliveryCost={item.deliveryDetails.deliveryCost}
                        deliveryFee={item.deliveryDetails.deliveryFee}
                        time={item.deliveryDetails.time}
                        rating={item.rating}
                        toggleSwitch={toggleSwitch}
                    />
                </View>
            ))}
        </View>
    );
}

