import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
import TimerButton from './TimerButton';

const millisecondsToHuman = (ms) => {
    const seconds = Math.floor(ms / 1000);
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};

const Timer = ({ timer, onEdit, onUpdate, onDelete }) => {
    const [elapsed, setElapsed] = useState(timer.elapsed);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        if (timer.isRunning) {
            const id = setInterval(() => {
                setElapsed(prev => prev + 1000); // Increment by 1000ms (1 second)
            }, 1000);
            setIntervalId(id);
        }
        return () => clearInterval(intervalId);
    }, [timer.isRunning]);

    const toggleTimer = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
        onUpdate({ ...timer, isRunning: !timer.isRunning, elapsed });
    };

    return (
        <View style={tw`p-4 bg-white rounded-lg border border-gray-200 mb-2`}>
            <Text style={tw`text-lg font-bold text-gray-800`}>{timer.title}</Text>
            <Text style={tw`text-sm text-gray-600`}>{timer.project}</Text>
            <Text style={tw`text-2xl my-2 font-mono`}>{millisecondsToHuman(elapsed)}</Text>
            <View style={tw`flex-row justify-between`}>
                <TimerButton
                    title={timer.isRunning ? 'Stop' : 'Start'}
                    onPress={toggleTimer}
                    color={timer.isRunning ? 'bg-red-500' : 'bg-green-500'}
                />
                <TimerButton title="Edit" onPress={onEdit} color="bg-blue-500" />
                <TimerButton
                    title="Delete"
                    onPress={() => onDelete(timer.id)}
                    color="bg-red-500"
                />
            </View>
        </View>
    );
};

export default Timer;