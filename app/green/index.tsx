import { ModalView } from "@/components/ModalView";
import { router } from "expo-router";
import { useState } from "react";
import { Button, View } from "react-native";
import * as React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function GreenScreen() {
  const insets = useSafeAreaInsets();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={{ flex: 1, paddingBottom: insets.bottom }}>
        <Button title="push green/modal" onPress={() => router.push("/green/modal")} />
        <Button title="Present RN Modal" onPress={() => setModalVisible(true)} />
        <View style={{ flex: 1, width: 50, backgroundColor: "green" }} />
      </View>

      <ModalView visible={modalVisible} close={() => setModalVisible(false)}>
        <View style={{ width: 200, height: 200, backgroundColor: "white" }}>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <Button
            title="Push Modal"
            onPress={() => {
              setModalVisible(false);
              router.push("/green/modal");
            }}
          />
        </View>
      </ModalView>
    </>
  );
}
