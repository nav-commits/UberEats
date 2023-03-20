import { View, Text, Image, StyleSheet } from 'react-native';
import { useContext } from 'react';
import SelectTypeContent from '../../Organisms/SelectTypeContent/SelectTypeContent';
import SelectType from '../../Atoms/SelectType/SelectType';

export default function Account() {
    return (
        <View style={{ paddingTop: 15, backgroundColor: 'white' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, paddingLeft: 20, paddingBottom: 5 }}>
                Nav dhamrait
            </Text>
            <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}>
                <SelectType
                    Image={
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                paddingTop: 10,
                            }}
                        >
                            <Image
                                source={require('../../../../assets/Food.png')}
                                style={{ width: 45, height: 45 }}
                            />
                        </View>
                    }
                    typeItem={<Text style={styles.typeItem}>Favourites</Text>}
                    width={100}
                    height={40}
                    backgroundColor={'#F0F0F0'}
                />
                <SelectType
                    Image={
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                paddingTop: 10,
                            }}
                        >
                            <Image
                                source={require('../../../../assets/wallet.png')}
                                style={{ width: 45, height: 45 }}
                            />
                        </View>
                    }
                    typeItem={<Text style={styles.typeItem}>Wallet</Text>}
                    width={100}
                    height={40}
                    backgroundColor={'#F0F0F0'}
                />

            </View>


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
        fontSize: 12,
        fontWeight: '500',
        textAlign: 'center'
    },
});