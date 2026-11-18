import {StatusBar, View, Text, Button} from 'react-native';
import styles from './styles';
import Box from './Box';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './router';

type Props = NativeStackScreenProps<RootStackParamList>;

export default function Home( {navigation}: Props) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle='dark-content'/>
            <Text>Home Screen</Text>
            <Button
                title="Go to Settings"
                onPress={()=>navigation.navigate('Settings')}
            />
            <Button
                title="First Item"
                onPress={()=>navigation.navigate('Details', {title: "First Item"})}
            /> 
            <Button
                title="Second Item"
                onPress={()=>navigation.navigate('Details', {title: "Second Item"})}
            /> 
            <Button
                title="Third Item"
                onPress={()=>navigation.navigate('Details', {title: "Third Item"})}
            />
            <Button
                title="First Stock Item"
                onPress={()=>navigation.navigate('ItemDetails', {title: "First Stock Item",
                    content: "First Item Content",
                    stock: 1,
                })}
            />
            <Button
                title="Second Stock Item"
                onPress={()=>navigation.navigate('ItemDetails', {title: "Second Stock Item",
                    content: "Second Item Content",
                    stock: 0,})}
            /> 
            <Button
                title="Third Stock Item"
                onPress={()=>navigation.navigate('ItemDetails', {title: "Third Stock Item",
                    content: "Third Item Content",
                    stock: 200,})}
            />
        </View>
    );