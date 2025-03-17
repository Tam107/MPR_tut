import {Button, StyleSheet, Text, TextInput, View} from 'react-native'
import React,{useState, useEffect} from 'react'
import {useNavigation} from "@react-navigation/native";

const Timers = () => {
    const navigation = useNavigation();
    const [timers, setTimers] = useState([])

    return (
        <View className="flex-1 bg-blue-400">
            <View className="flex justify-center items-center p-2 bg-white">
                <Text className="font-bold text-xs">Timers</Text>
            </View>

            <View>
                <TextInput placeholder={"Enter the ..."} className={"p-2 border rounded-md"}/>
            </View>
            <View>
                {/*<Button title={"Go to form screen"} onPress={() => navigation.navigate("FormScreen")}/>*/}
            </View>

        </View>
    )
}
export default Timers
const styles = StyleSheet.create({})
