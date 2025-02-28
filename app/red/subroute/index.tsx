import { HeaderLeft } from "@/components/HeaderLeft";
import { ScrollviewWithStuff } from "@/components/ScrollviewWithStuff";
import { router, Stack } from "expo-router";
import { Button, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function RedSubroute() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, paddingBottom: insets.bottom }}>
      <Stack.Screen
        options={{
          headerLeft: () => <HeaderLeft />,
          headerRight: () => <HeaderLeft />,
          headerTitle: "Red",
        }}
      />
      <Button title="dismiss" onPress={() => router.dismiss()} />
      <Button title="dismissAll" onPress={() => router.dismissAll()} />
      <Button title="dismissTo /blue" onPress={() => router.dismissTo("/blue")} />
      <Button title="navigate /green/modal" onPress={() => router.navigate("/green/modal")} />
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View style={{ width: 50, height: "100%", backgroundColor: "red" }} />
        <ScrollviewWithStuff style={{ flex: 1 }} />
      </View>
      <View style={{ height: 50, backgroundColor: "darkred", width: "100%" }} />
    </View>
  );
}
