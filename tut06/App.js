import React, {createContext, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import DetailPage from "./screens/DetailPage";
import {Button} from "react-native";
import ButtonChange from "./components/ButtonChange";


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
        <MyContext.Provider value={profile}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{
                            title: 'Home', // Static title for the Home screen
                            headerStyle: {
                                backgroundColor: '#f4511e', // Set background color
                            },
                            headerTintColor: '#fff', // Set header text color
                            headerTitleStyle: {
                                fontWeight: 'bold', // Make the title bold
                            },
                            headerRight: () => (
                                <ButtonChange/>)
                        }}
                    />
                    <Stack.Screen name="Detail" component={DetailPage} options={{title: 'Detail'}}/>

                </Stack.Navigator>
            </NavigationContainer>
        </MyContext.Provider>
    );
}


// import {StyleSheet, Text, View} from 'react-native'
// import React from 'react'
// import {createStackNavigator} from "@react-navigation/native/src/__stubs__/createStackNavigator";
// import {NavigationContainer} from "@react-navigation/native";
// import HomeScreen from "./screens/HomeScreen";
//
// const Stack = createStackNavigator()
//
// const App = () => {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen name={"Home"} component={HomeScreen()}/>
//             </Stack.Navigator>
//         </NavigationContainer>
//     )
// }
// export default App
// const styles = StyleSheet.create({})
