import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import SearchBar from '../../Atoms/SearchBar/SearchBar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Home() {
    const [inputs, setInputs] = React.useState('');
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.parentContainer}
        >
            <View style={styles.contentContainer}>
                <Text style={styles.deliverAddress}>Deliver now</Text>
                <Text style={styles.streetAddressStyle}>123 Edenbrook street</Text>
            </View>
            <SearchBar
                onChangeText={(newText) => setInputs(newText)}
                value={inputs}
                placeHolder='Food, groceries, drinks, etc'
                marginRight={50}
                icon={
                    <View style={{ position: 'relative', left: 35, elevation: 3, zIndex: 5 }}>
                        <FontAwesome name='search' size={16} color='hsl(240, 25%, 25%)' />
                    </View>
                }
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    parentContainer: {
        paddingVertical: 20,
        backgroundColor: 'white',
    },
    contentContainer: {
        paddingLeft: 18,
        paddingTop: 10,
    },
    deliverAddress: {
        fontSize: 12,
        color: 'grey',
    },
    streetAddressStyle: {
        fontSize: 12,
        color: 'black',
        fontWeight: 'bold',
    },
});
