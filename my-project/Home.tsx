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
        </View>
    );
