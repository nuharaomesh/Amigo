import { ApplicationProvider } from "@ui-kitten/components";
import { Stack } from "expo-router";
import * as eva from "@eva-design/eva";
import { Provider } from "react-redux";
import { store } from "@/store/store";

export default function Layout() {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <Provider store={store}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </Provider>
    </ApplicationProvider>
  );
}
