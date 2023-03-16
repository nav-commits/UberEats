import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import SelectType from '../../Atoms/SelectType/SelectType';
export default function SelectTypeContent({ data }) {
    return (
        <View style={styles.parentWrapper}>
            {data.map((label, i) => (
                <TouchableOpacity key={i}>
                    <SelectType
                        Image={
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: label.justifyContent,
                                    marginTop: 10,
                                }}
                            >
                                <Image
                                    source={label.image}
                                    style={{ width: label.widthImage, height: label.height }}
                                />
                            </View>
                        }
                        typeItem={<Text style={styles.typeItem}>{label.label}</Text>}
                        bottomText={<Text style={styles.bottomText}>{label.labelBottom}</Text>}
                        width={label.width}
                    />
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    bottomText: {
        textAlign: 'center',
        fontSize: 11,
        paddingLeft: 15,
        fontWeight: '500',
    },
    typeItem: {
        paddingLeft: 10,
        fontSize: 12,
        fontWeight: '500',
    },
    parentWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});
