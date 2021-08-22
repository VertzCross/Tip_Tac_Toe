import React, { useEffect, useCallback, useState } from "react"
import { View, ViewStyle, TextStyle, SafeAreaView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Button, Header, Screen, AdVideoModal, Cell, Text } from "../../components"
import { color, spacing } from "../../theme"

const FULL: ViewStyle = { flex: 1, backgroundColor: color.palette.orangeDarker }
const CONTAINER: ViewStyle = {
  flex: 1,
  paddingHorizontal: spacing[4],
  alignItems: "center",
  justifyContent: "center",
}
const BOLD: TextStyle = { fontWeight: "bold" }
const HEADER: TextStyle = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: spacing[4],
}
const HEADER_TITLE: TextStyle = {
  ...BOLD,
  fontSize: 20,
  textAlign: "center",
  letterSpacing: 1.5,
}
const ROW_STYLE: ViewStyle = {
  backgroundColor: color.transparent,
  width: 315,
  height: 105,
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",
}
const DESCRIPTION: TextStyle = {
  fontSize: 18,
  textAlign: "center",
  margin: spacing[4],
}
const STATUS: TextStyle = {
  fontSize: 25,
  marginTop: spacing[4],
}
const FOOTER_CONTENT: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
}

export const PlayScreen = observer(() => {
  const navigation = useNavigation()
  const goBack = () => navigation.goBack()

  const [history, setHistory] = useState([
    {
      board: Array(9).fill(null),
    },
  ])
  const [currentBoard, setCurrentBoard] = useState(history[0].board)
  const [stepNumber, setStepNumber] = useState(0)
  const [currentPlayer, setCurrentPlayer] = useState("X")
  const [bestMove, setBestMove] = useState(-2)
  const [winnerLine, setWinnerLine] = useState([])
  const [status, setStatus] = useState("Awaiting First Move")

  const [isAdVisible, setAdVisible] = useState(false)

  const calculateWinner = (board, isTest = false) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    const winnerLine = lines.find((line) => {
      const [a, b, c] = line
      return board[a] && board[a] === board[b] && board[a] === board[c]
    }, false)

    if (winnerLine) {
      if (!isTest) {
        console.log(winnerLine)
        setWinnerLine(winnerLine)
      }
      return board[winnerLine[0]]
    }
    return null
  }

  const isBoardFilled = (board) => {
    return !board.includes(null)
  }

  const getBestMove = useCallback((board, player) => {
    const opponent = player === "X" ? "O" : "X"
    const minimax = (board, isMax) => {
      const winner = calculateWinner(board, true)

      if (winner === player) return { cell: -1, score: 1 }

      if (winner === opponent) return { cell: -1, score: -1 }

      if (isBoardFilled(board)) return { cell: -1, score: 0 }

      const best = { cell: -1, score: isMax ? -1000 : 1000 }

      for (let i = 0; i < board.length; i++) {
        if (!board[i]) {
          board[i] = isMax ? player : opponent
          const score = minimax(board, !isMax).score
          board[i] = null

          if (isMax) {
            if (score > best.score) {
              best.score = score
              best.cell = i
            }
          } else {
            if (score < best.score) {
              best.score = score
              best.cell = i
            }
          }
        }
      }

      return best
    }

    return minimax(board, true).cell
  }, [])

  const controlStatus = useCallback(() => {
    const winner = calculateWinner(currentBoard)
    if (winner) {
      setStatus("Winner: " + winner)
    } else if (isBoardFilled(currentBoard)) {
      setStatus("It's a Tie!")
    } else {
      setStatus("Next player: " + currentPlayer)
    }
  }, [currentBoard, currentPlayer])

  const makeMove = (position: number) => {
    const board = currentBoard
    if (!calculateWinner(board) && !board[position]) {
      board[position] = currentPlayer
      const newHistory = [...history, { board }]

      setHistory(newHistory)
      setCurrentBoard(board)
      setStepNumber(newHistory.length)
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
    }
  }

  const startPlay = () => {
    const nextMove = getBestMove(currentBoard, currentPlayer)
    setBestMove(nextMove)
    controlStatus()
  }

  const cleanBoard = () => {
    setAdVisible(true)
    setHistory([
      {
        board: Array(9).fill(null),
      },
    ])
    setCurrentBoard(Array(9).fill(null))
    setStepNumber(0)
    setCurrentPlayer("X")
    setBestMove(-2)
    setWinnerLine([])
    setStatus("Awaiting First Move")
  }

  useEffect(() => {
    if (stepNumber) {
      controlStatus()
      const nextMove = getBestMove(currentBoard, currentPlayer)
      setBestMove(nextMove)
    }
  }, [getBestMove, currentBoard, stepNumber, currentPlayer, controlStatus])

  return (
    <SafeAreaView testID="PlayScreen" style={FULL}>
      <AdVideoModal isVisible={isAdVisible} setVisible={setAdVisible} />
      <Header
        headerTx="common.TipTacToe"
        leftIcon="back"
        onLeftPress={goBack}
        style={HEADER}
        titleStyle={HEADER_TITLE}
      />
      <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
        <Text>
          <Text text="TIP " preset="titleTip" />
          <Text text="TAC " preset="titleTac" />
          <Text text="TOE" preset="titleToe" />
        </Text>
        <Text style={DESCRIPTION} preset="cell" tx="common.description" />
        <View style={ROW_STYLE}>
          <Cell
            position={0}
            board={currentBoard}
            makeMove={makeMove}
            nextMove={bestMove}
            currentPlayer={currentPlayer}
            winnerLine={winnerLine}
          />
          <Cell
            position={1}
            board={currentBoard}
            makeMove={makeMove}
            nextMove={bestMove}
            currentPlayer={currentPlayer}
            winnerLine={winnerLine}
          />
          <Cell
            position={2}
            board={currentBoard}
            makeMove={makeMove}
            nextMove={bestMove}
            currentPlayer={currentPlayer}
            winnerLine={winnerLine}
          />
        </View>
        <View style={ROW_STYLE}>
          <Cell
            position={3}
            board={currentBoard}
            makeMove={makeMove}
            nextMove={bestMove}
            currentPlayer={currentPlayer}
            winnerLine={winnerLine}
          />
          <Cell
            position={4}
            board={currentBoard}
            makeMove={makeMove}
            nextMove={bestMove}
            currentPlayer={currentPlayer}
            winnerLine={winnerLine}
          />
          <Cell
            position={5}
            board={currentBoard}
            makeMove={makeMove}
            nextMove={bestMove}
            currentPlayer={currentPlayer}
            winnerLine={winnerLine}
          />
        </View>
        <View style={ROW_STYLE}>
          <Cell
            position={6}
            board={currentBoard}
            makeMove={makeMove}
            nextMove={bestMove}
            currentPlayer={currentPlayer}
            winnerLine={winnerLine}
          />
          <Cell
            position={7}
            board={currentBoard}
            makeMove={makeMove}
            nextMove={bestMove}
            currentPlayer={currentPlayer}
            winnerLine={winnerLine}
          />
          <Cell
            position={8}
            board={currentBoard}
            makeMove={makeMove}
            nextMove={bestMove}
            currentPlayer={currentPlayer}
            winnerLine={winnerLine}
          />
        </View>
        <Text style={STATUS} preset="cell" text={status} />
      </Screen>
      <View style={FOOTER_CONTENT}>
        {bestMove < -1 && !winnerLine.length && (
          <Button testID="StartCheating" text="Start Cheating" onPress={startPlay} />
        )}
        {bestMove > -2 && <Button testID="ReplayCheating" text="Start Over" onPress={cleanBoard} />}
      </View>
    </SafeAreaView>
  )
})
