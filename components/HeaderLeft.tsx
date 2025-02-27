import type { HeaderBackButtonProps } from "@react-navigation/elements";
import { router } from "expo-router";
import { Image, Pressable, TouchableOpacity } from "react-native";

export function HeaderLeft({ onPress, style, ...props }: HeaderBackButtonProps) {
  const handlePress = onPress ?? (router.canGoBack() ? router.back : () => console.log("No back route"));

  return (
    <TouchableOpacity hitSlop={20} onPress={handlePress} style={[style]} {...props}>
      <Image source={require("@/assets/images/icon-close.png")} style={{ height: 30, tintColor: "blue", width: 30 }} />
    </TouchableOpacity>
  );
}
