import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { MainContext } from '../../../Context/MainContext';
import React, { useContext } from 'react';
import ProductItemContent from '../../Organisms/ProductItemContent/ProductItemContent';
import { allItems } from '../../../Utils/ProductItemLabels';
import MenuItem from '../../Molecules/MenuItem/MenuItem';
import PopupModal from '../../Molecules/Modal/Modal';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ItemDetailScreen() {
    const { itemData } = useContext(MainContext);
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

    const onPressHandler = () => {
        setModalVisible(true);
    };
    console.log(modalVisible);

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
            {/* modal is here */}
            <PopupModal
                modalVisible={modalVisible}
                icon={
                    <Icon
                        name={'close'}
                        size={25}
                        style={{ paddingTop: 5 }}
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}
                    />
                }
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
