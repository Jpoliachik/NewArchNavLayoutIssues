import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import * as React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useState } from "react";

export default function GreenScreen() {
  const insets = useSafeAreaInsets();
  return (
    <>
      <View style={{ flex: 1, paddingBottom: insets.bottom }}>
        <Pressable onPress={() => router.navigate("/green/modal")}>
          <Text>Green / Modal </Text>
        </Pressable>
        <Counter />
        <View style={{ flex: 1, width: 50, backgroundColor: "green" }} />
        <View style={{ height: 50, width: "100%", backgroundColor: "darkgreen" }} />
      </View>
    </>
  );
}

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <Pressable onPress={() => setCount(count + 1)}>
      <Text>{`Counter: ${count}`}</Text>
    </Pressable>
  );
};
