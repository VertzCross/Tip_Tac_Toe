import React from "react"
import { View, ViewStyle } from "react-native"
import Modal from "react-native-modal"

import { Text } from "../text/text"
import { color, spacing } from "../../theme"

const MODAL_CONTAINER: ViewStyle = {
  justifyContent: "flex-end",
}

const MODAL_BACKGROUND: ViewStyle = {
  width: "100%",
  height: "40%",
  paddingHorizontal: spacing[4],
  paddingBottom: spacing[6],
  alignItems: "center",
  justifyContent: "space-around",
  borderRadius: 30,
  marginBottom: -45,
  backgroundColor: color.palette.lighterGrey,
}
export const AboutModal = ({ isVisible, setVisible }) => (
  <Modal
    style={MODAL_CONTAINER}
    animationIn="slideInUp"
    animationOut="slideOutDown"
    onBackdropPress={() => setVisible(false)}
    isVisible={isVisible}
    swipeDirection={["down"]}
    onSwipeComplete={() => setVisible(false)}
    useNativeDriver
    useNativeDriverForBackdrop
  >
    <View style={MODAL_BACKGROUND}>
      <Text preset="cell" tx="common.about" />
      <Text preset="primary" tx="common.aboutDescription" />
      <Text preset="primary" tx="common.aboutFooter" />
    </View>
  </Modal>
)
