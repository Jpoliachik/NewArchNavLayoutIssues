import { router } from "expo-router";
import { Button, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GreenModal() {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Button title="dismissTo /blue" onPress={() => router.dismissTo("/blue")} />
        <View style={{ flex: 1, width: 50, backgroundColor: "green" }} />
      </SafeAreaView>
    </View>
  );
}
