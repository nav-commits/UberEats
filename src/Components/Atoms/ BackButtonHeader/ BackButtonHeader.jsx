import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const BackButtonHeader = ({ navigation }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', margin:'10px' }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="ios-arrow-back" size={30} color="black" />
            </TouchableOpacity>
        </View>
    );
};

export default BackButtonHeader;