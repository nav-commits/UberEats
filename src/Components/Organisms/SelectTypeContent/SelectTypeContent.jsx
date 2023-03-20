import { View, StyleSheet, Text, Image} from 'react-native';
import React from 'react';
import SelectType from '../../Atoms/SelectType/SelectType';
export default function SelectTypeContent({ data }) {
    return (
        <View style={styles.parentWrapper}>
            {data.map((label, i) => (
                <View key={i}>
                    <SelectType
                        Image={
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: label.justifyContent,
                                    paddingTop: 10,
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
                        backgroundColor={'#F0F0F0'}
                    />
                </View>
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
        backgroundColor: 'white',
        paddingBottom: 20,
        paddingTop: 8,
    },
});
