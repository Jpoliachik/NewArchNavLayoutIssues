import { router } from "expo-router";
import { Button, View } from "react-native";
import * as React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function GreenScreen() {
  const insets = useSafeAreaInsets();
  return (
    <>
      <View style={{ flex: 1, paddingBottom: insets.bottom }}>
        <Button title="Green / Modal " onPress={() => router.navigate("/green/modal")} />
        <View style={{ flex: 1, width: 50, backgroundColor: "green" }} />
        <View style={{ height: 50, width: "100%", backgroundColor: "darkgreen" }} />
      </View>
    </>
  );
}
