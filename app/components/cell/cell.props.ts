import { ViewStyle, TouchableOpacityProps } from "react-native"

export interface ButtonProps extends TouchableOpacityProps {
  position: number

  board: Array<string>

  nextMove?: number

  currentPlayer: string

  makeMove: (position: number) => void

  winnerLine?: Array<number>

  style?: ViewStyle | ViewStyle[]
}
