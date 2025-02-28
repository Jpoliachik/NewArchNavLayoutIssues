import { router } from "expo-router";
import { Button, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export default function RedScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, paddingBottom: insets.bottom }}>
      <Button title="Red / Subroute" onPress={() => router.navigate("/red/subroute")} />
      <View style={{ flex: 1, backgroundColor: "red", width: 50 }} />
      <View style={{ height: 50, backgroundColor: "darkred", width: "100%" }} />
    </View>
  );
}
