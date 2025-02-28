import { router } from "expo-router";
import { Button, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export default function BlueScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, paddingBottom: insets.bottom }}>
      <Button title="push /blue/stack" onPress={() => router.push("/blue/stack")} />
      <View style={{ flex: 1, backgroundColor: "blue", width: 50 }} />
      <View style={{ height: 50, backgroundColor: "darkblue", width: "100%" }} />
    </View>
  );
}
