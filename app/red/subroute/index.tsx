import { router } from "expo-router";
import { Button, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function RedSubroute() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, paddingBottom: insets.bottom }}>
      <Button title="dismiss" onPress={() => router.dismiss()} />
      <Button title="dismissAll" onPress={() => router.dismissAll()} />
      <Button title="dismissTo /blue" onPress={() => router.dismissTo("/blue")} />
      <Button title="navigate /green/modal" onPress={() => router.navigate("/green/modal")} />
      <View style={{ flex: 1, backgroundColor: "red", width: 50 }} />
      <View style={{ height: 50, backgroundColor: "darkred", width: "100%" }} />
    </View>
  );
}
