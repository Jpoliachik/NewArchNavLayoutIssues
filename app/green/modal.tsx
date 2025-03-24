import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function GreenModal() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, paddingBottom: insets.bottom }}>
      <Pressable onPress={() => router.dismiss()}>
        <Text>dismiss()</Text>
      </Pressable>
      <Pressable onPress={() => router.dismissAll()}>
        <Text>dismissAll()</Text>
      </Pressable>
      <Pressable onPress={() => router.dismissTo("/blue")}>
        <Text>dismissTo("/blue")</Text>
      </Pressable>
      <Pressable onPress={() => router.dismissTo("/red")}>
        <Text>dismissTo("/red")</Text>
      </Pressable>
      <View style={{ flex: 1, width: 50, backgroundColor: "green" }} />
      <View style={{ height: 50, width: "100%", backgroundColor: "darkgreen" }} />
    </View>
  );
}
