import { ScrollView, StyleProp, View, ViewStyle } from "react-native";

export const ScrollviewWithStuff = ({ style }: { style: StyleProp<ViewStyle> }) => {
  // render views with random height and background color
  return (
    <ScrollView style={style} contentContainerStyle={{ gap: 10, padding: 16 }}>
      {Array.from({ length: 200 }).map((_, index) => (
        <View
          key={index}
          style={{
            height: Math.random() * 100,
            backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
          }}
        />
      ))}
    </ScrollView>
  );
};
