import { ViewStyle, TextStyle } from "react-native"
import { typography, spacing, color } from "../../theme"

/**
 * All text will start off looking like this.
 */
const BASE_VIEW: ViewStyle = {
  paddingVertical: spacing[2],
  paddingHorizontal: spacing[2],
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f2f2f2",
  width: 95,
  height: 95,
  shadowColor: color.palette.black,
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.8,
  shadowRadius: 5,
  elevation: 1,
}

export const viewPresets = {
  primary: { ...BASE_VIEW } as ViewStyle,
  winner: { ...BASE_VIEW, backgroundColor: color.palette.lightBlue } as ViewStyle,
}

const BASE: TextStyle = {
  fontFamily: typography.primary,
  color: color.text,
  fontSize: 45,
}

export const textPresets = {
  cell: { ...BASE, color: color.palette.black } as TextStyle,
  alert: { ...BASE, color: color.palette.angry } as TextStyle,
}
