import { router } from "expo-router";
import { Button, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function BlueStack() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, paddingBottom: insets.bottom }}>
      <Button title="dismissAll" onPress={() => router.dismissAll()} />
      <Button title="push /green/modal" onPress={() => router.push("/green/modal")} />
      <View style={{ flex: 1, backgroundColor: "blue", width: 50 }} />
    </View>
  );
}
