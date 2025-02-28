import { router } from "expo-router";
import { Button, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function GreenModal() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, paddingBottom: insets.bottom }}>
      <Button title="dismissTo /explore" onPress={() => router.dismissTo("/(tabs)")} />
      <View style={{ flex: 1, width: 50, backgroundColor: "green" }} />
    </View>
  );
}
