import { ApplicationProvider } from "@ui-kitten/components";
import {Stack} from "expo-router";
import * as eva from '@eva-design/eva';

export default function Layout() {
    return (
        <ApplicationProvider {...eva} theme={eva.dark}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
            </Stack>
        </ApplicationProvider>   
    )
}