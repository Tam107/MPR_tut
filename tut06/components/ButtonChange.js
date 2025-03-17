import {View, Text, Image, Button} from 'react-native'
import React from 'react'
import {useNavigation} from "@react-navigation/native";

const ButtonChange = () => {
    const navigation = useNavigation();

    return (
        <Button title={"detail"} onPress={()=> navigation.navigate('Detail')}></Button>
    )
}
export default ButtonChange
