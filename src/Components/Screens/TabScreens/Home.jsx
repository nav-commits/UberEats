import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import React from 'react';
import SearchBar from '../../Atoms/SearchBar/SearchBar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SelectTypeContent from '../../Organisms/SelectTypeContent/SelectTypeContent';
import { selectLabels } from '../../../Utils/Labels';

export default function Home() {
    const [inputs, setInputs] = React.useState('');
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.parentContainer}
        >
            <View style={styles.contentContainer}>
                <Text style={styles.deliverAddress}>Deliver now</Text>
                <Text style={styles.streetAddressStyle}>123 Oak Street</Text>
            </View>
            <SearchBar
                onChangeText={(newText) => setInputs(newText)}
                value={inputs}
                placeHolder='Food, groceries, drinks, etc'
                marginRight={50}
                searchIcon={
                    <View style={{ position: 'relative', left: 40, elevation: 3, zIndex: 5 }}>
                        <FontAwesome name='search' size={16} color='hsl(240, 25%, 25%)' />
                    </View>
                }
                filterIcon={
                    <View style={{ position: 'relative', right: 45, elevation: 3, zIndex: 5 }}>
                        <Ionicons name='filter' size={16} color='black' />
                    </View>
                }
                dividerVerticalLine={
                    <View
                        style={{
                            position: 'relative',
                            borderColor: 'grey',
                            right: 55,
                            height: 30,
                            borderLeftWidth: 1,
                        }}
                    />
                }
            />
            <SelectTypeContent data={selectLabels} />
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
