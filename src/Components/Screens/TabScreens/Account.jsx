import { View, Text } from 'react-native';
import SelectTypeContent from '../../Organisms/SelectTypeContent/SelectTypeContent';
import { selectAccountLabels } from '../../../Utils/Labels';

export default function Account() {
    return (
        <View style={{ paddingTop: 20, backgroundColor: 'white' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 28, padding: 10 }}>John Doe</Text>
            <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
                <SelectTypeContent data={selectAccountLabels} />
            </View>
        </View>
    );
}

