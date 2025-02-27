import { router } from "expo-router";
import { Button, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GreenModal() {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView>
        <Button title="dismissAll" onPress={() => router.dismissAll()} />
      </SafeAreaView>
    </View>
  );
}
