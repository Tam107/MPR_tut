import React, {createContext, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import DetailPage from "./screens/DetailPage";


// 🟢 Context must be defined outside the component
export const MyContext = createContext(null);

// 🟡 Stack Navigator
const Stack = createNativeStackNavigator();

export default function App() {
    const [profile, setProfile] = useState({
        name: "Tam",
        age: 5
    });

    return (
        <MyContext.Provider >
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen}/>
                    <Stack.Screen name="Detail" component={DetailPage} options={{title: 'Detail'}}/>

                </Stack.Navigator>
            </NavigationContainer>
        </MyContext.Provider>
    );
}

