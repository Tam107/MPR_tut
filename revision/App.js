import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// Todo item component with a button to navigate to details
const Todo = ({ content, onPress }) => {
    return (
        <View style={styles.todoItem}>
            <Text style={styles.todoText}>{content}</Text>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>Go to Details</Text>
            </TouchableOpacity>
        </View>
    );
};

const HomeScreen = ({ navigation }) => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTask = () => {
        if (inputValue.trim()) {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter new task"
                value={inputValue}
                onChangeText={setInputValue}
            />
            <TouchableOpacity style={styles.addButton} onPress={addTask}>
                <Text style={styles.addButtonText}>Add Task</Text>
            </TouchableOpacity>
            <FlatList
                data={todos}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Todo
                        content={item}
                        onPress={() => navigation.navigate('Details', { task: item })}
                    />
                )}
            />
        </View>
    );
};

const DetailsScreen = ({ route }) => {
    const { task } = route.params; // Get the task passed as a parameter

    return (
        <View style={styles.container}>
            <Text style={styles.detailsHeader}>Task Details:</Text>
            <Text style={styles.detailsText}>{task}</Text>
        </View>
    );
};

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        borderRadius: 8,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: '#fff',
    },
    addButton: {
        backgroundColor: '#4CAF50',
        padding: 12,
        borderRadius: 8,
        marginBottom: 20,
        alignItems: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    todoItem: {
        width: '30%',
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        alignItems: 'center',
    },
    todoText: {
        fontSize: 16,
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
    },
    detailsHeader: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#333',
    },
    detailsText: {
        fontSize: 18,
        color: '#555',
        lineHeight: 24,
    },
});
