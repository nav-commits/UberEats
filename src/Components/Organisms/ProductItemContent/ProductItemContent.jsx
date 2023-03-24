import { View, Text, Image, StyleSheet, FlatList, ScrollView } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Button from '../../Atoms/Button/Button';
import Entypo from 'react-native-vector-icons/Entypo';

export default function ProductItemContent({ data }) {
    const OnPressHandler = () => {
        console.log("clicked")
    }
    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <FlatList
                    style={styles.listStyle}
                    keyExtractor={(key) => {
                        return key.id;
                    }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={OnPressHandler}>
                                <View style={styles.listStyle}>
                                    <Button
                                        icon={<Entypo name={'plus'} size={12} color={'white'} />}
                                    />
                                    <View style={{ width: 120 }}>
                                        <View style={{ backgroundColor: '#F0F0F0', padding: 10 }}>
                                            <Image
                                                source={{
                                                    uri: item.img,
                                                }}
                                                style={{ height: 90 }}
                                            />
                                        </View>

                                        <View style={{ padding: 10 }}>
                                            <Text>{item.title}</Text>
                                            <Text>${item.price}</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
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
        margin: 2,
        padding: 5,
        zIndex: -10,
    },
});
