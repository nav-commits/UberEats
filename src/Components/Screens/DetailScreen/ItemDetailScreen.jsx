import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { MainContext } from '../../../Context/MainContext';
import React, { useContext } from 'react';
import ProductItemContent from '../../Organisms/ProductItemContent/ProductItemContent';
import { allItems } from '../../../Utils/ProductItemLabels';
import MenuItem from '../../Molecules/MenuItem/MenuItem';
export default function ItemDetailScreen() {
    const { itemData } = useContext(MainContext);

    const findItemProductOne = itemData.map((foundItem) =>
        foundItem?.productDetails?.ProductsOne.filter((findItem) => {
            let checkItem = allItems.includes(findItem?.productTitle);
            return checkItem;
        })
    );
    let flatArray = findItemProductOne.flat();

    const findItemProductTwo = itemData.map((foundItem) =>
        foundItem?.productDetails?.ProductsTwo.filter((findItem) => {
            let checkItem = allItems.includes(findItem?.productTitle);
            return checkItem;
        })
    );
    let flatProductTwoArray = findItemProductTwo.flat();

    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {itemData.map((item, i) => (
                    <View key={i}>
                        <Image
                            source={{
                                uri: item.img,
                            }}
                            style={{ width: '100%', height: 180 }}
                        />
                        <Text style={styles.texStyle}>
                            {item.name} {item.location}
                        </Text>
                        <Text style={{ fontSize: 12, color: 'grey', paddingLeft: 5 }}>
                            {item?.deliveryDetails?.time} {item?.deliveryDetails?.deliveryCost}{' '}
                            {item?.deliveryDetails?.deliveryFee}
                        </Text>
                    </View>
                ))}

                {itemData.some((item) => item?.productItem === 'productItem') ? (
                    <View>
                        {itemData.map((item, i) => (
                            <View key={i}>
                                <Text style={styles.texStyle}>
                                    {item.productDetails?.productTitleOne}
                                </Text>
                            </View>
                        ))}
                        <ProductItemContent data={flatArray} itemData={itemData} />
                        {itemData.map((item, i) => (
                            <View key={i}>
                                <Text style={styles.texStyle}>
                                    {item.productDetails?.productTitleTwo}
                                </Text>
                            </View>
                        ))}
                        <ProductItemContent data={flatProductTwoArray} itemData={itemData} />
                    </View>
                ) : (
                    <View>
                        {itemData.map((item, i) => (
                            <View key={i}>
                                <Text style={styles.texStyle}>
                                    {item.productDetails?.productTitleOne}
                                </Text>
                            </View>
                        ))}
                        <MenuItem data={flatArray} />
                        {itemData.map((item, i) => (
                            <View key={i}>
                                <Text style={styles.texStyle}>
                                    {item.productDetails?.productTitleTwo}
                                </Text>
                            </View>
                        ))}
                        <MenuItem data={flatProductTwoArray} />
                    </View>
                )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    texStyle: {
        paddingLeft: 8,
        paddingTop: 20,
        fontSize: 17,
        fontWeight: 'bold',
    },
});
