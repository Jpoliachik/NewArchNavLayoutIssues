import { router } from "expo-router";
import { Button, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ModalScreenWrapper } from "@/components/ModalScreenWrapper";
export default function GreenModal() {
  const insets = useSafeAreaInsets();
  return (
    <ModalScreenWrapper>
      <View style={{ flex: 1, paddingBottom: insets.bottom }}>
        <Button title="dismiss()" onPress={() => router.dismiss()} />
        <Button title="dismissAll()" onPress={() => router.dismissAll()} />
        <Button title="dismissTo /blue" onPress={() => router.dismissTo("/blue")} />
        <Button title="dismissTo /red" onPress={() => router.dismissTo("/red")} />
        <View style={{ flex: 1, width: 50, backgroundColor: "green" }} />
        <View style={{ height: 50, width: "100%", backgroundColor: "darkgreen" }} />
      </View>
    </ModalScreenWrapper>
  );
}
