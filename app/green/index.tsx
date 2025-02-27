import { router } from "expo-router";
import { Button, SafeAreaView, View } from "react-native";

export default function GreenScreen() {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Button title="push green/green-modal" onPress={() => router.push("/green/green-modal")} />

        <View style={{ flex: 1, width: 50, backgroundColor: "green" }} />
      </SafeAreaView>
    </View>
  );
}
