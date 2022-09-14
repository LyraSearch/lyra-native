# lyra-native ✨
Demo of [Lyra](https://lyrajs.io/) running in a cross platform [React Native](https://reactnative.dev/) application.

The core of this repo is an React Native application built with [Expo](https://expo.dev/).
The application can be built for the web, iOS, or Android.
To facilitate easy development and deployment, the application uses Expo.

## Branches 🌳

There are several important branches to repo:
* `main` contains the React Native Expo application with the full 10MB test dataset
* `snack-size` contains the same application as `main` but with a smaller dataset that allows the application to run using Expo Snack. Snack uses a web framework to develop and run Expo applications directly on the web (think codesandbox for react native). The 10MB dataset crashes Expo Snack, so this branch has a smaller dataset.
* `site` contains the demo website. The website embeds both the react-native-web build of the full demo (from the `main` branch) and the Expo Snack (from the `snack-size`) branch.

## Run on your device 📱

1. Checkout the `main` branch and then `npm run start` to start the Expo app.
2. **Native:** Install [Expo Go](https://expo.dev/client) on your device and then scan the QR code in your terminal.
3. **Web:** Press `w` to open the web build.
