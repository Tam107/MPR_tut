import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const HomeScreen = () => {
    const navigation = useNavigation(); // Declare navigation hook

    return (
        <View>
            <Text>HomeScreen</Text>
            <Button title={"Go to Detail"} onPress={() => navigation.navigate('Detail')} />
        </View>
    );
}

export default HomeScreen;
const styles = StyleSheet.create({});
