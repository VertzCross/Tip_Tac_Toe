import React, { useCallback, useRef, useEffect } from "react"
import { TouchableOpacity, Animated } from "react-native"

import { Text } from "../text/text"

import { viewPresets, textPresets } from "./cell.presets"
import { ButtonProps } from "./cell.props"

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export const Cell = (props: ButtonProps) => {
  // grab the props
  const { position, board, nextMove, currentPlayer, makeMove, winnerLine, ...rest } = props

  const viewStyle =
    winnerLine.length && winnerLine.includes(position) ? viewPresets.winner : viewPresets.primary

  const animationControl = useRef(new Animated.Value(1)).current

  const animation = useCallback(
    () =>
      Animated.loop(
        Animated.sequence([
          Animated.timing(animationControl, {
            useNativeDriver: true,
            toValue: 1,
            duration: 200,
          }),
          Animated.timing(animationControl, {
            useNativeDriver: true,
            toValue: 0,
            duration: 200,
            delay: 500,
          }),
        ]),
      ).start(),
    [animationControl],
  )

  useEffect(() => {
    animation()
  }, [animation, nextMove])
  const content = useCallback(() => {
    if (nextMove !== position) return <Text style={textPresets.cell} text={board[position] || ""} />
    return (
      <Animated.Text
        testID="BestMove"
        style={{
          ...textPresets.alert,
          opacity: animationControl,
        }}
      >
        {currentPlayer}
      </Animated.Text>
    )
  }, [animationControl, board, currentPlayer, nextMove, position])

  return (
    <TouchableOpacity
      style={viewStyle}
      onPress={() => makeMove(position)}
      disabled={!!board[position] || nextMove < 0}
      {...rest}
    >
      {content()}
    </TouchableOpacity>
  )
}
