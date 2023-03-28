import { StyleSheet, Text, Image } from 'react-native';
import * as React from 'react';
import { useContext } from 'react';
import { View } from 'react-native';
import { MainContext } from '../../../Context/MainContext';

export default function Baskets() {
    const { cart } = useContext(MainContext);
    return (
        <View style={styles.scene}>
            {cart.length > 0 ? (
                <Text>items</Text>
            ) : (
                <View>
                    <Text style={{ padding: 10, fontSize: 25, fontWeight: 'bold' }}>Carts</Text>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            marginTop: 30,
                        }}
                    >
                        <Image
                            source={require('../../../../assets/cart.png')}
                            style={{ width: 140, height: 140 }}
                        />
                    </View>
                    <Text
                        style={{
                            paddingTop: 10,
                            fontSize: 16,
                            fontWeight: 'bold',
                            textAlign: 'center',
                        }}
                    >
                        Add items to start a cart
                    </Text>
                    <Text style={{ padding: 5, fontSize: 12, textAlign: 'center', color: 'gray' }}>
                        Once you add items from a restaurant or store
                    </Text>
                    <Text style={{ fontSize: 12, textAlign: 'center', color: 'gray' }}>
                        your cart will appear here.
                    </Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    scene: {
        backgroundColor: 'white',
        marginTop: 10,
    },
});
