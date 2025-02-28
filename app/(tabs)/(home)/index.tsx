import { Image, StyleSheet, Platform, TouchableOpacity, Button, View } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { Link, router, Stack } from "expo-router";
import * as React from "react";
import { ThemedText } from "@/components/ThemedText";

export default function HomeScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
        headerImage={<Image source={require("@/assets/images/partial-react-logo.png")} style={styles.reactLogo} />}
      >
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Home</ThemedText>
        </ThemedView>
        <View style={{ flex: 1, gap: 8 }}>
          <Button title="Green" onPress={() => router.navigate("/green")} />
          <Button title="Blue" onPress={() => router.navigate("/blue")} />
          <Button title="Red" onPress={() => router.navigate("/red")} />
        </View>
      </ParallaxScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
