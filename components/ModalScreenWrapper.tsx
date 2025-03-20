import type { ViewProps } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { Platform, useWindowDimensions, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

/*
This component is necessary to workaround a bug with react-native-screens on New Architecture (or possibly Fabric)
Affecting iOS-only, Modal-presented screens only. 
https://github.com/software-mansion/react-native-screens/issues/2587

Height calculation of the view is sometimes incorrect. 
In cases where we have a fixed bottom footer, this results in the footer being cut off.
As a workaround, this component manually calculates the height of the view instead of relying on Flex. 

This is a temporary solution until the underlying issue is resolved and this component can be safely removed. 
*/

export function ModalScreenWrapper({ children, style, ...props }: ViewProps) {
  const headerHeight = useHeaderHeight();
  const dimensions = useWindowDimensions();
  const insets = useSafeAreaInsets();
  return (
    <View
      {...props}
      style={[
        Platform.select({
          default: {
            flex: 1,
          },
          ios: {
            height: dimensions.height - insets.top - headerHeight - 10,
          },
        }),
        style,
      ]}
    >
      {children}
    </View>
  );
}
