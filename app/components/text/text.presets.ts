import { TextStyle } from "react-native"
import { color, typography } from "../../theme"

/**
 * All text will start off looking like this.
 */
const BASE: TextStyle = {
  fontFamily: typography.code,
  color: color.text,
  fontSize: 15,
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const presets = {
  default: BASE,
  primary: { ...BASE, color: color.palette.black } as TextStyle,
  bold: { ...BASE, fontWeight: "bold" } as TextStyle,
  titleTip: {
    ...BASE,
    fontSize: 54,
    fontWeight: "bold",
    color: color.palette.angry,
  } as TextStyle,
  titleTac: { ...BASE, fontSize: 54, fontWeight: "bold", color: color.palette.purple } as TextStyle,
  titleToe: {
    ...BASE,
    fontSize: 54,
    fontWeight: "bold",
    color: color.palette.lightBlue,
  } as TextStyle,

  cell: { ...BASE, fontSize: 45, color: color.palette.black } as TextStyle,
  alert: { ...BASE, fontSize: 45, color: color.palette.angry } as TextStyle,
}

export type TextPresets = keyof typeof presets
