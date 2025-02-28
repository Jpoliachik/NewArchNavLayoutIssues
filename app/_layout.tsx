import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { HeaderLeft } from "@/components/HeaderLeft";
import { Platform } from "react-native";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen
          name="green/index"
          options={{
            animation: Platform.select({ android: "slide_from_bottom", native: "default" }),
            headerLeft: () => <HeaderLeft />,
            headerTitle: "Green",
            headerTitleAlign: "center",
            headerTitleStyle: { color: "green" },
            headerTintColor: "green",
            presentation: "modal",
          }}
        />
        <Stack.Screen
          name="green/modal"
          options={{
            animation: Platform.select({ android: "slide_from_bottom", native: "default" }),
            headerLeft: () => <HeaderLeft />,
            headerTitleAlign: "center",
            headerTitleStyle: { color: "green" },
            headerTintColor: "green",
            presentation: "modal",
          }}
        />
        <Stack.Screen
          name="red/index"
          options={{
            headerLeft: () => <HeaderLeft />,
            presentation: "modal",
            animation: Platform.select({ android: "slide_from_bottom", native: "default" }),
          }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
