import React from "react"

import { createNativeStackNavigator } from "react-native-screens/native-stack"
import { PlayScreen, MenuScreen } from "../screens"

export type PrimaryParamList = {
  play: undefined
  menu: undefined
}
const Stack = createNativeStackNavigator<PrimaryParamList>()

export function PrimaryNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <Stack.Screen name="menu" component={MenuScreen} />
      <Stack.Screen name="play" component={PlayScreen} />
    </Stack.Navigator>
  )
}

const exitRoutes = ["menu"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
