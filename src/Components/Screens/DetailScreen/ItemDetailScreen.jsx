import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { MainContext } from '../../../Context/MainContext';
import React, { useContext, useEffect, useState } from 'react';

export default function ItemDetailScreen() {
    const { itemData } = useContext(MainContext);
    const findItemProductOne = itemData.map((foundItem) =>
        foundItem?.productDetails?.ProductsOne.filter((findItem) => {
            let checkItem =
                findItem.productTitle === 'Grocery' ||
                findItem.productTitle === 'Beer & Cider' ||
                findItem.productTitle === 'Deals';
            return checkItem;
        })
    );
    let flatArray = findItemProductOne.flat();

    const findItemProductTwo = itemData.map((foundItem) =>
        foundItem?.productDetails?.ProductsTwo.filter((findItem) => {
            let checkItem =
                findItem.productTitle === 'Candles' ||
                findItem.productTitle === 'Ready To Drink' ||
                findItem.productTitle === 'Dairy & Eggs';
            return checkItem;
        })
    );
    let flatProductTwoArray = findItemProductTwo.flat();

    const findItemProductThree = itemData.map((foundItem) =>
        foundItem?.productDetails?.ProductsThree.filter((findItem) => {
            let checkItem =
                findItem.productTitle === 'Spirits' ||
                findItem.productTitle === 'Kitchen products' ||
                findItem.productTitle === 'Fruits & Vegetables';
            return checkItem;
        })
    );
    let flatProductThreeArray = findItemProductThree.flat();

    return (
        <View>
            {itemData.map((item, i) => (
                <View key={i}>
                    <Text
                        style={{
                            padding: 12,
                            fontSize: 15,
                            fontWeight: 'bold',
                        }}
                    >
                        {item.productDetails?.productTitleOne}
                    </Text>
                </View>
            ))}
            <FlatList
                style={styles.listStyle}
                keyExtractor={(key) => {
                    return key.key;
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={flatArray}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <View style={styles.textStyle}>
                                <Text>{item.title}</Text>
                                <Text>${item.price}</Text>
                            </View>
                        </View>
                    );
                }}
            />
            {itemData.map((item, i) => (
                <View key={i}>
                    <Text
                        style={{
                            padding: 12,
                            fontSize: 15,
                            fontWeight: 'bold',
                        }}
                    >
                        {item.productDetails?.productTitleTwo}
                    </Text>
                </View>
            ))}
            <FlatList
                style={styles.listStyle}
                keyExtractor={(key) => {
                    return key.key;
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={flatProductTwoArray}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <View style={styles.textStyle}>
                                <Text>{item.title}</Text>
                                <Text>${item.price}</Text>
                            </View>
                        </View>
                    );
                }}
            />
            {itemData.map((item, i) => (
                <View key={i}>
                    <Text
                        style={{
                            padding: 12,
                            fontSize: 15,
                            fontWeight: 'bold',
                        }}
                    >
                        {item.productDetails?.productTitleThree}
                    </Text>
                </View>
            ))}
            <FlatList
                style={styles.listStyle}
                keyExtractor={(key) => {
                    return key.key;
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={flatProductThreeArray}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <View style={styles.textStyle}>
                                <Text>{item.title}</Text>
                                <Text>${item.price}</Text>
                            </View>
                        </View>
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        padding: 30,

        margin: 20,
        color: 'white',
    },
    listStyle: {
        textAlign: 'center',
        margin: 5,
        padding: 10,
    },
});
