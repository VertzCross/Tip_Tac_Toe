import { ViewStyle, TextStyle } from "react-native"
import { color, spacing } from "../../theme"

const BASE_VIEW: ViewStyle = {
  paddingVertical: spacing[3],
  paddingHorizontal: spacing[3],
  borderRadius: 10,
  justifyContent: "center",
  alignItems: "center",
}

const BASE_TEXT: TextStyle = {
  paddingHorizontal: spacing[3],
  color: color.text,
  fontWeight: "bold",
}
export const viewPresets = {
  primary: { ...BASE_VIEW, backgroundColor: color.palette.purple } as ViewStyle,

  link: {
    ...BASE_VIEW,
    paddingHorizontal: 0,
    paddingVertical: 0,
    alignItems: "flex-start",
  } as ViewStyle,
}

export const textPresets = {
  primary: {
    ...BASE_TEXT,
    fontSize: 25,
  } as TextStyle,
  link: {
    ...BASE_TEXT,
    paddingHorizontal: 0,
    paddingVertical: 0,
    fontSize: 20,
  } as TextStyle,
}

export type ButtonPresetNames = keyof typeof viewPresets
