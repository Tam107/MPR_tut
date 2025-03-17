import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import tw from 'twrnc';
import TimerButton from './TimerButton';

const ToggleableTimerForm = ({ initialValues = {}, isVisible, onSubmit, onToggle }) => {
    const [title, setTitle] = useState(initialValues.title || '');
    const [project, setProject] = useState(initialValues.project || '');

    const handleSubmit = () => {
        onSubmit({
            ...initialValues,
            title,
            project,
        });
        setTitle('');
        setProject('');
    };

    if (!isVisible) {
        return (
            <TouchableOpacity
                style={tw`bg-blue-500 p-4 rounded-lg items-center`}
                onPress={onToggle}
            >
                <Text style={tw`text-white font-bold text-lg`}>+ New Timer</Text>
            </TouchableOpacity>
        );
    }

    return (
        <View style={tw`p-4 bg-white rounded-lg border border-gray-200`}>
            <TextInput
                style={tw`border border-gray-300 p-2 mb-2 rounded-md`}
                placeholder="Timer Title"
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style={tw`border border-gray-300 p-2 mb-2 rounded-md`}
                placeholder="Project Name"
                value={project}
                onChangeText={setProject}
            />
            <View style={tw`flex-row justify-between`}>
                <TimerButton title="Submit" onPress={handleSubmit} color="bg-green-500" />
                <TimerButton title="Cancel" onPress={onToggle} color="bg-red-500" />
            </View>
        </View>
    );
};

export default ToggleableTimerForm;