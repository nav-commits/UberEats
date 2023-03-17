import { StyleSheet, Text,} from 'react-native';
import * as React from 'react';
import { View } from 'react-native';



export default function Baskets() {
    return (
        <View style={styles.scene}>
           <Text>Carts</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});
