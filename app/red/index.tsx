import { ScrollviewWithStuff } from "@/components/ScrollviewWithStuff";
import { router } from "expo-router";
import { Button, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export default function RedScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, paddingBottom: insets.bottom }}>
      <Button title="Red / Subroute" onPress={() => router.navigate("/red/subroute")} />
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ width: 50, height: "100%", backgroundColor: "red" }} />
        <ScrollviewWithStuff style={{ flex: 1 }} />
      </View>
      <View style={{ height: 50, backgroundColor: "darkred", width: "100%" }} />
    </View>
  );
}
