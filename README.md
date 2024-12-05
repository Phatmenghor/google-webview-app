# React Native WebView for Google Homepage

This project implements a React Native application that displays the Google homepage using the WebView component. Users can navigate through the Google website, interact with search forms, links, and navigation.

## Features

- **WebView with Google Homepage**: The app loads the Google homepage and allows users to interact with it.
- **Navigation**: Back, forward, and reload buttons for navigating within the WebView.
- **Network Status**: Displays a "No internet connection" message when offline using `NetInfo`.
- **Pull-to-Refresh**: Users can pull down the WebView to reload the page.
- **Error Handling**: Alerts appear for loading issues or HTTP errors.

## External Libraries Used

1. **[react-native-webview](https://github.com/react-native-webview/react-native-webview)**: Displays the Google website within the app.
2. **[@react-native-community/netinfo](https://github.com/react-native-netinfo/react-native-netinfo)**: Monitors network connectivity and handles offline scenarios.

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/react-native-webview-google
cd react-native-webview-google
```

# Using npm

```bash
npm install
```

# OR using yarn

```bash
yarn install
```

# For iOS

# For start

```bash
expo start
```

```bash
expo start --ios
```

# For Android

```bash
expo start --android
```

# For Web

```bash
expo start --web
```
