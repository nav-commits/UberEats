import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import Button from '../../Atoms/Button/Button';
import Entypo from 'react-native-vector-icons/Entypo';
export default function ProductItemContent({ data, onPress }) {
    return (
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
                        <TouchableOpacity onPress={() => onPress(item.id, item.title)}>
                            <View style={styles.listStyle}>
                                <Button icon={<Entypo name={'plus'} size={12} color={'white'} />} />
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
