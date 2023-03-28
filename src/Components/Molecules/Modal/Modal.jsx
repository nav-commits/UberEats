import { View, Modal, Text, StyleSheet, Image } from 'react-native';
export default function PopupModal({ modalVisible, icon, button, data }) {
    return (
        <Modal animationType='slide' transparent={true} visible={modalVisible}>
            <View style={styles.modalView}>
                {data.map((item, i) => (
                    <View key={i}>
                        <View
                            style={{
                                backgroundColor: '#F8F8F8',
                                height: 200,
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                            }}
                        >
                            <Image
                                source={{
                                    uri: item.img,
                                }}
                                style={{ width: 180, height: 150, marginTop: 30 }}
                            />
                        </View>
                        <View style={styles.iconStyle}>{icon}</View>
                        <Text style={styles.textStyle}>{item.title}</Text>
                        <Text style={styles.price}>$ {item.price}</Text>
                        
                    </View>
                ))}
                {button}
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalView: {
        backgroundColor: 'white',
        shadowColor: '#000',
        height: '100%',
        width: '100%',
    },
    textStyle: {
        color: 'hsl(240, 25%, 25%)',
        fontWeight: 'bold',
        paddingLeft: 10,
        fontSize: 20,
    },
    price: {
        color: 'hsl(240, 25%, 25%)',
        fontWeight: 'bold',
        fontSize: 14,
        paddingLeft: 10,
    },
    iconStyle: {
        backgroundColor: 'white',
        borderRadius: 20,
        height: 35,
        width: 35,
        position: 'relative',
        bottom: 160,
        zIndex: 200,
        left: 10,
        justifyContent: 'center',
        padding: 5,
    },
});
