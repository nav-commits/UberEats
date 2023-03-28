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
                <View>
                    {cart.map((item, i) => (
                        <View key={i}>
                            {/* make this menuitem component */}
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignContent: 'space-around',
                                    gap: 10,
                                    margin: 10
                                }}
                            >
                                <Image
                                    source={{
                                        uri: item.img,
                                    }}
                                    style={{ width: 60, height: 70 }}
                                />
                                <View>
                                    <Text style={styles.textStyle}>{item.title}</Text>
                                    <Text style={styles.price}>$ {item.price}</Text>
                                    <Text style={{ paddingLeft: 10, color: 'grey', fontSize: 12 }}>Deliver to{item.deliverAddress}</Text>
                                    {/* delete function and icon */}
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
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
    textStyle: {
        color: 'hsl(240, 25%, 25%)',
        fontWeight: 'bold',
        paddingLeft: 10,
        fontSize: 15,
    },
    price: {
        color: 'hsl(240, 25%, 25%)',
        fontWeight: 'bold',
        fontSize: 14,
        paddingLeft: 10,
    },
});
