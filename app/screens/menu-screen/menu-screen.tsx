import React, { useState } from "react"
import { View, SafeAreaView, ViewStyle } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Button, Text, Screen, AboutModal } from "../../components"
import { color, spacing } from "../../theme"

const FULL: ViewStyle = { flex: 1, backgroundColor: color.palette.orangeDarker }
const CONTAINER: ViewStyle = {
  flex: 1,
  paddingHorizontal: spacing[4],
  alignItems: "center",
  justifyContent: "space-around",
}
const BUTTON: ViewStyle = {
  marginVertical: spacing[2],
}

export const MenuScreen = observer(() => {
  const navigation = useNavigation()
  const navigate = () => navigation.navigate("play")
  const [isVisible, setVisible] = useState(false)

  return (
    <SafeAreaView testID="MenuScreen" style={FULL}>
      <AboutModal isVisible={isVisible} setVisible={setVisible} />
      <Screen style={CONTAINER} preset="fixed" backgroundColor={color.transparent}>
        <Text>
          <Text text="TIP " preset="titleTip" />
          <Text text="TAC " preset="titleTac" />
          <Text text="TOE" preset="titleToe" />
        </Text>
        <View>
          <Button testID="Cheating" style={BUTTON} tx="common.cheat" onPress={navigate} />
          <Button style={BUTTON} tx="common.about" onPress={() => setVisible(true)} />
        </View>
      </Screen>
    </SafeAreaView>
  )
})
