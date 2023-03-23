import { View, Text, Image, StyleSheet, FlatList, ScrollView } from 'react-native';
import { MainContext } from '../../../Context/MainContext';
import React, { useContext } from 'react';

export default function ProductItemContent({ data, itemData }) {
    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
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
                    data={data}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.listStyle}>
                                <View style={{ backgroundColor: '#F0F0F0', padding: 10 }}>
                                    <Image
                                        source={{
                                            uri: item.img,
                                        }}
                                        style={{ height: 90 }}
                                    />
                                </View>
                                <View style={{ padding: 10 }}>
                                    <Text style={{ width: 80 }}>{item.title}</Text>
                                    <Text>${item.price}</Text>
                                </View>
                            </View>
                        );
                    }}
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    listStyle: {
        textAlign: 'center',
        margin: 5,
        padding: 5,
    },
});
