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

    const findItemProductThree = itemData.map((foundItem) =>
        foundItem?.productDetails?.ProductsThree.filter((findItem) => {
            let checkItem = allItems.includes(findItem?.productTitle);
            return checkItem;
        })
    );
    let flatProductThreeArray = findItemProductThree.flat();

    // put all arrays into one for the json array and then filter for each flatlist component
    // check tomorrow
    //  create seperate componnent for each flat list render item

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
                    </View>
                ))}
                <Text>
                    {itemData.map((item, i) => (
                        <View key={i}>
                            <Text
                                style={styles.texStyle}
                            >
                                {item.name} {item.location}
                            </Text>
                        </View>
                    ))}
                </Text>
                <ProductItemContent data={flatArray} itemData={itemData} />
                <ProductItemContent data={flatProductTwoArray} itemData={itemData} />
                <ProductItemContent data={flatProductThreeArray} itemData={itemData} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    texStyle: {
        padding: 12,
        fontSize: 15,
        fontWeight: 'bold',
    },
});
