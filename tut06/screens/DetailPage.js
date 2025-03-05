import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const DetailPage = () => {
    const navigation = useNavigation(); // Declare navigation hook

    return (
        <View>
            <Text>DetailPage</Text>
            <Button title={"Go to Home"} onPress={() => navigation.navigate('Home')} />
        </View>
    );
}

export default DetailPage;
const styles = StyleSheet.create({});
