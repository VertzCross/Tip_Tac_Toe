# TipTacToe

[![TIPTACTOE1]](https://ik.imagekit.io/builderstest/Screen_Shot_2021-08-22_at_17.19.47_IPggHJPcQ.png?updatedAt=1629676830050)
[![TIPTACTOE2]](https://ik.imagekit.io/builderstest/Screen_Shot_2021-08-22_at_17.20.12_l7beL0a4g.png?updatedAt=1629676830258)
[![TIPTACTOEVIDEO]](https://ik.imagekit.io/builderstest/tiptactoevideo_QKol93WF7.gif?updatedAt=1629677730950)

## Description

The App have a easy going experience, fast tips for fast games, the UI is colorful and fun.
The main goal is to provide a guideness to players of tic tac toe, the project uses a minmax algoritmo to play all cases scenarios and choose the best one, this happens in realtime.

# The Stack

Currently includes:

- React Native
- React Navigation
- MobX State Tree
- TypeScript
- Detox
- and more!!

## Project's Structure

The project was started with Ignite Bowser boilerplate and this is the structure provided and keep it:

```
TipTacToe
├── app
│   ├── components
│   ├── i18n
│   ├── utils
│   ├── models
│   ├── navigation
│   ├── screens
│   ├── services
│   ├── theme
│   ├── app.tsx
├── test
│   ├── mock-i18n.ts
│   ├── mock-reactotron.ts
│   ├── setup.ts
├── README.md
├── android
│   ├── app
│   ├── build.gradle
│   ├── gradle
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   ├── keystores
│   └── settings.gradle
├── ignite
│   ├── ignite.json
│   └── plugins
├── index.js
├── ios
│   ├── IgniteProject
│   ├── IgniteProject-tvOS
│   ├── IgniteProject-tvOSTests
│   ├── IgniteProject.xcodeproj
│   └── IgniteProjectTests
└── package.json

```

# Test E2E

## Setup

To get your Detox tests up and running, you'll need to install some global dependencies:

1. Install the latest version of [Homebrew](https://brew.sh/)
2. Make sure you have Node installed (at least 8.6.0).

3. Install `applesimutils, which will allow Detox to communicate with the iOS simulator:

```bash
brew tap wix/brew && brew install applesimutils
```

4. Install the Detox CLI

```bash
  yarn global add detox-cli
```

## Running tests

1. Start the packager

```
yarn start
```

2. Run the app

In a separate terminal window from the packager: ( This might take a while, actually is better get a coffee, wait, run the line bellow and return tomorrow )

```
yarn build:e2e
```

3. Run the tests

```
yarn test:e2e
```
