import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuidv4 } from "uuid";

const TimeTrackingApp = () => {
    const [timers, setTimers] = useState([]);
    const [title, setTitle] = useState("");
    const [project, setProject] = useState("");

    useEffect(() => {
        loadTimers();
    }, []);

    useEffect(() => {
        saveTimers();
    }, [timers]);

    const loadTimers = async () => {
        try {
            const storedTimers = await AsyncStorage.getItem("timers");
            if (storedTimers) setTimers(JSON.parse(storedTimers));
        } catch (error) {
            console.error("Error loading timers:", error);
        }
    };

    const saveTimers = async () => {
        try {
            await AsyncStorage.setItem("timers", JSON.stringify(timers));
        } catch (error) {
            console.error("Error saving timers:", error);
        }
    };

    const addTimer = () => {
        if (title.trim() && project.trim()) {
            setTimers([...timers, { id: uuidv4(), title, project, elapsed: 0, isRunning: false, startTime: null }]);
            setTitle("");
            setProject("");
        }
    };

    const toggleTimer = (id) => {
        setTimers((prevTimers) =>
            prevTimers.map((timer) => {
                if (timer.id === id) {
                    if (timer.isRunning) {
                        return { ...timer, isRunning: false, elapsed: timer.elapsed + (Date.now() - timer.startTime) };
                    } else {
                        return { ...timer, isRunning: true, startTime: Date.now() };
                    }
                }
                return timer;
            })
        );
    };

    const deleteTimer = (id) => {
        setTimers(timers.filter((timer) => timer.id !== id));
    };

    const renderTimer = ({ item }) => (
        <View style={{ padding: 10, borderBottomWidth: 1 }}>
            <Text>Title: {item.title}</Text>
            <Text>Project: {item.project}</Text>
            <Text>Elapsed Time: {((item.elapsed + (item.isRunning ? Date.now() - item.startTime : 0)) / 1000).toFixed(1)}s</Text>
            <Button title={item.isRunning ? "Stop" : "Start"} onPress={() => toggleTimer(item.id)} />
            <Button title="Delete" onPress={() => deleteTimer(item.id)} color="red" />
        </View>
    );

    return (
        <View style={{ padding: 20 }}>
            <TextInput placeholder="Task Title" value={title} onChangeText={setTitle} style={{ borderBottomWidth: 1, marginBottom: 10 }} />
            <TextInput placeholder="Project Name" value={project} onChangeText={setProject} style={{ borderBottomWidth: 1, marginBottom: 10 }} />
            <Button title="Add Timer" onPress={addTimer} />
            <FlatList data={timers} keyExtractor={(item) => item.id} renderItem={renderTimer} />
        </View>
    );
};

export default TimeTrackingApp;



