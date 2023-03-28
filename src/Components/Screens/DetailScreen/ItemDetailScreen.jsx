import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { MainContext } from '../../../Context/MainContext';
import React, { useContext, useEffect } from 'react';
import ProductItemContent from '../../Organisms/ProductItemContent/ProductItemContent';
import { allItems } from '../../../Utils/ProductItemLabels';
import MenuItem from '../../Molecules/MenuItem/MenuItem';
import PopupModal from '../../Molecules/Modal/Modal';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../Atoms/Button/Button';

export default function ItemDetailScreen() {
    const { itemData, setFoundItem, foundItem } = useContext(MainContext);
    const [modalVisible, setModalVisible] = React.useState(false);

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

    const findItem = (id, title) => {
        const foundProductItem = itemData.map((item) => {
            const productOne = item?.productDetails?.ProductsOne.find(
                (findItem) => findItem.id === id && findItem.title === title
            );
            const productTwo = item?.productDetails?.ProductsTwo.find(
                (findItem) => findItem.id === id && findItem.title === title
            );
            if (productOne !== undefined) {
                return productOne;
            } else if (productTwo) {
                return productTwo;
            }
        });
        setFoundItem(foundProductItem);
    };
    const onPressHandler = (id, title) => {
        findItem(id, title);
        setModalVisible(true);
    };
    // create a function for a button to add these to a cart page
    console.log(foundItem);

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
                        <ProductItemContent
                            data={flatArray}
                            itemData={itemData}
                            onPress={onPressHandler}
                        />
                        {itemData.map((item, i) => (
                            <View key={i}>
                                <Text style={styles.texStyle}>
                                    {item.productDetails?.productTitleTwo}
                                </Text>
                            </View>
                        ))}
                        <ProductItemContent
                            data={flatProductTwoArray}
                            itemData={itemData}
                            onPress={onPressHandler}
                        />
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
                        <MenuItem data={flatArray} onPress={onPressHandler} />
                        {itemData.map((item, i) => (
                            <View key={i}>
                                <Text style={styles.texStyle}>
                                    {item.productDetails?.productTitleTwo}
                                </Text>
                            </View>
                        ))}
                        <MenuItem data={flatProductTwoArray} onPress={onPressHandler} />
                    </View>
                )}
            </ScrollView>
            <PopupModal
                modalVisible={modalVisible}
                icon={
                    <Icon
                        name={'arrow-back'}
                        size={25}
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}
                    />
                }
                button={
                    <Button
                        backgroundColor={'black'}
                        color='white'
                        borderRadius={2}
                        margin={15}
                        padding={15}
                        title='Add to cart'
                    />
                }
                data={foundItem}
            />
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
