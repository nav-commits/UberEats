import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import SelectType from '../../Atoms/SelectType/SelectType';
export default function SelectTypeContent({ data }) {
    return (
        <View
            style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                
            }}
        >
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
                        typeItem={
                            <Text style={{ paddingLeft: 10, fontSize: 12, fontWeight: '500' }}>
                                {label.label}
                            </Text>
                        }
                        bottomText={
                            <Text
                                style={{
                                    textAlign: 'center',
                                    fontSize: 11,
                                    paddingLeft: 15,
                                    fontWeight: '500',
                                }}
                            >
                                {label.labelBottom}
                            </Text>
                        }
                        width={label.width}
                    />
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({});
