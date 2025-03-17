import {StyleSheet, Text, View, Button, StatusBar} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/native/src/__stubs__/createStackNavigator"; // Import useNavigation hook



const HomeScreen = () => {
    const navigation = useNavigation(); // Declare navigation hook

    const changeTitle = () => {
        // Update the header title dynamically
        navigation.navigate('Detail');
    };

    return (
        <View>
            <StatusBar barStyle="light-content"/>

            <Text>HomeScreen</Text>
            <Button title={"Go to Detail"} onPress={() => navigation.navigate('Detail')} />
            <Button title={"hehe"} onPress={changeTitle} />
        </View>
    );
}

export default HomeScreen;
const styles = StyleSheet.create({});
