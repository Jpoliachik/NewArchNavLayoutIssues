import { router } from "expo-router";
import { Button, View } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
export default function BlueScreen() {
  const tabHeight = useBottomTabBarHeight();
  return (
    <View style={{ flex: 1, paddingBottom: tabHeight }}>
      <Button title="Blue / Subroute" onPress={() => router.navigate("/blue/subroute")} />
      <View style={{ flex: 1, backgroundColor: "blue", width: 50 }} />
      <View style={{ height: 50, backgroundColor: "darkblue", width: "100%" }} />
    </View>
  );
}
