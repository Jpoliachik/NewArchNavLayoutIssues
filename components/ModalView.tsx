import { Modal, Pressable } from "react-native";

export const ModalView = ({
  children,
  visible,
  close,
}: {
  children: React.ReactNode;
  visible: boolean;
  close: () => void;
}) => {
  return (
    <Modal animationType="fade" onRequestClose={close} transparent={true} visible={visible}>
      <Pressable
        accessible={false}
        onPress={close}
        style={{
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          flex: 1,
          justifyContent: "center",
        }}
      >
        {children}
      </Pressable>
    </Modal>
  );
};
