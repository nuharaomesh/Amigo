import {Stack} from "expo-router";
import { StyleSheet } from "react-native";

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
        </Stack>
    )
}