import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { router } from "expo-router";
import { Button, View } from "react-native";

export default function BlueStack() {
  const tabHeight = useBottomTabBarHeight();
  return (
    <View style={{ flex: 1, paddingBottom: tabHeight }}>
      <Button title="dismissAll" onPress={() => router.dismissAll()} />
      <Button title="navigate /green/modal" onPress={() => router.navigate("/green/modal")} />
      <Button title="navigate /red/subroute" onPress={() => router.navigate("/red/subroute")} />
      <View style={{ flex: 1, backgroundColor: "blue", width: 50 }} />
      <View style={{ height: 50, backgroundColor: "darkblue", width: "100%" }} />
    </View>
  );
}
