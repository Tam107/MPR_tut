import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import tw from 'twrnc';

const TimerButton = ({ title, onPress, color }) => (
    <TouchableOpacity
        style={tw`${color} py-2 px-4 rounded-md min-w-[80px] items-center`}
        onPress={onPress}
    >
        <Text style={tw`text-white font-bold`}>{title}</Text>
    </TouchableOpacity>
);

export default TimerButton;