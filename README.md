# React Native WebView for Google Homepage

## Overview

This project implements a React Native application that displays the Google homepage using the WebView component. It allows users to navigate through the Google website as they would in a native app, including interacting with search forms, links, and navigation.

## Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/react-native-webview-google
   cd react-native-webview-google
   ```

## Install dependencies:

    use npm  => npm install
    use yarn => yarn install

## Run the app on iOS or Android:

    For start: expo start
    For iOS: expo start --ios
    For Android: expo start --android
    FOr Web: expo start --web

## Features

- **WebView with Google Homepage**: The app loads the Google homepage and allows users to interact with it.
- **Navigation**: Implemented back, forward, and reload buttons for navigating the webpage within the WebView.
- **Network Status**: Handles offline scenarios using `NetInfo`. Displays a "No internet connection" message when there is no network.
- **Pull-to-Refresh**: Allows users to pull down the WebView to reload the page.
- **Error Handling**: Shows alerts if there are any issues loading the page or HTTP errors.

## External Libraries Used

1. **react-native-webview**: Displays the Google website within the app. It allows full interaction with the web page.
2. **@react-native-community/netinfo**: Monitors network connectivity and displays a message when there is no internet connection.

## Design Approach

- The WebView mimics a native app experience by providing intuitive back, forward, and reload buttons.
- The navigation buttons are conditionally enabled/disabled based on the WebView's state (canGoBack, canGoForward).
- The app is designed to feel integrated with the native environment, with smooth transitions and a clean layout.

## Challenges

- **Network Connectivity Handling**: Initially, it was difficult to handle cases where the network state was null. We used the `??` operator to ensure the connectivity state is always boolean (`true/false`).
- **WebView Performance**: Ensuring that the WebView works efficiently, especially on low-end devices, was a challenge. We optimized it by handling the loading state and adding an activity indicator.

## Evaluation Criteria Addressed

Functionality: The WebView loads Google's homepage correctly, and navigation works smoothly with back, forward, and reload buttons.
Native Look & Feel: The app feels like a native app with smooth transitions, responsive buttons, and network state handling.
User Experience: The app is intuitive with a clean layout, handles offline scenarios, and provides pull-to-refresh functionality.
Code Quality: The code is modular, follows React Native best practices, and has a clean, well-structured layout.
Bonus Features: Pull-to-refresh and network status handling add to the app's user experience.
#   g o o g l e - w e b v i e w - a p p  
 