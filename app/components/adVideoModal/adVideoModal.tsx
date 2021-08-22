import React from "react"
import { View, ViewStyle, TextStyle } from "react-native"
import Modal from "react-native-modal"

import { Button } from "../button/button"
import { Text } from "../text/text"
import { color, spacing } from "../../theme"

const BUTTON: ViewStyle = {
  position: "absolute",
  top: 25,
  right: 25,
}

const MODAL_BACKGROUND: ViewStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: color.palette.purple,
  borderRadius: 45,
}
const CONTENT: TextStyle = {
  padding: spacing[4],
  textAlign: "center",
}

export const AdVideoModal = ({ isVisible, setVisible }) => (
  <Modal animationIn="slideInUp" animationOut="slideOutDown" isVisible={isVisible} useNativeDriver>
    <View style={MODAL_BACKGROUND}>
      <Button style={BUTTON} text="X" preset="link" onPress={() => setVisible(false)} />
      <Text style={CONTENT} preset="alert" tx="common.ads" />
    </View>
  </Modal>
)
