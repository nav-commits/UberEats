import { View, Text, Image, StyleSheet, FlatList, ScrollView } from 'react-native';
import { MainContext } from '../../../Context/MainContext';
import React, { useContext } from 'react';
import ProductItemContent from '../../Organisms/ProductItemContent/ProductItemContent';
import { allItems } from '../../../Utils/ProductItemLabels';
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
    // 1. fix json data for each list item - done
    // 2. create component for menuitems
    // 3. put all arrays into one for the json array and then filter for each flatlist component (refactor code)

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
                    <Text>hello world</Text>
                )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    texStyle: {
        paddingLeft: 5,
        paddingTop: 20,
        fontSize: 17,
        fontWeight: 'bold',
    },
});
