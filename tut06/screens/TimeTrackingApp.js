import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import tw from 'twrnc';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EditableTimer from '../components/EditableTimer';
import ToggleableTimerForm from "../components/ToggleableTimerForm";
const TimeTrackingApp = () => {
    const [timers, setTimers] = useState([]);
    const [isFormVisible, setIsFormVisible] = useState(false);

    useEffect(() => {
        // Load timers from AsyncStorage on mount
        const loadTimers = async () => {
            try {
                const storedTimers = await AsyncStorage.getItem('timers');
                if (storedTimers) setTimers(JSON.parse(storedTimers));
            } catch (error) {
                console.error('Error loading timers:', error);
            }
        };
        loadTimers();
    }, []);

    useEffect(() => {
        // Save timers to AsyncStorage when they change
        const saveTimers = async () => {
            try {
                await AsyncStorage.setItem('timers', JSON.stringify(timers));
            } catch (error) {
                console.error('Error saving timers:', error);
            }
        };
        saveTimers();
    }, [timers]);

    const handleCreateTimer = (newTimer) => {
        setTimers([...timers, {
            id: Date.now().toString(),
            title: newTimer.title,
            project: newTimer.project,
            elapsed: 0,
            isRunning: false,
        }]);
        setIsFormVisible(false);
    };

    const handleUpdateTimer = (updatedTimer) => {
        setTimers(timers.map(timer =>
            timer.id === updatedTimer.id ? updatedTimer : timer
        ));
    };

    const handleDeleteTimer = (timerId) => {
        setTimers(timers.filter(timer => timer.id !== timerId));
    };

    return (
        <SafeAreaView style={tw`flex-1 p-4 bg-gray-100`}>
            <FlatList
                data={timers}
                renderItem={({ item }) => (
                    <EditableTimer
                        timer={item}
                        onUpdate={handleUpdateTimer}
                        onDelete={handleDeleteTimer}
                    />
                )}
                keyExtractor={item => item.id}
                ListFooterComponent={
                    <ToggleableTimerForm
                        isVisible={isFormVisible}
                        onToggle={() => setIsFormVisible(!isFormVisible)}
                        onSubmit={handleCreateTimer}
                    />
                }
            />
        </SafeAreaView>
    );
};

export default TimeTrackingApp;