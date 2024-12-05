import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
} from "react-native";
import { WebView } from "react-native-webview";
import { useNetworkStatus } from "../utils/useNetworkStatus";
import WebViewNavigation from "../components/WebViewNavigation";
import { COLORS } from "../utils/colors";

// Navigation Buttons Component with TypeScript

const GoogleHomeScreen = () => {
  const webViewRef = useRef<WebView>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);

  const isConnected = useNetworkStatus();

  // Refresh the WebView
  const onRefresh = () => {
    setRefreshing(true);
    if (webViewRef.current) {
      webViewRef.current.reload();
    }
    setRefreshing(false);
  };

  // Handle navigation
  const goBack = () => {
    if (webViewRef.current && canGoBack) {
      webViewRef.current.goBack();
    }
  };

  const goForward = () => {
    if (webViewRef.current && canGoForward) {
      webViewRef.current.goForward();
    }
  };

  const reload = () => {
    if (webViewRef.current) {
      webViewRef.current.reload();
    }
  };

  // If not connected to the internet, show the offline screen
  if (!isConnected) {
    return (
      <SafeAreaView style={styles.offlineContainer}>
        <Text style={styles.offlineText}>No internet connection</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Navigation Bar */}
      <WebViewNavigation
        goBack={goBack}
        goForward={goForward}
        reload={reload}
        canGoBack={canGoBack}
        canGoForward={canGoForward}
      />

      {/* WebView with pull-to-refresh */}
      <ScrollView
        style={styles.webViewContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <WebView
          ref={webViewRef}
          source={{ uri: "https://www.google.com" }}
          style={styles.webView}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          renderLoading={() => (
            <ActivityIndicator size="large" color={COLORS.primary} />
          )}
          onError={() => alert("Error loading page")}
          onHttpError={(syntheticEvent) => {
            const { nativeEvent } = syntheticEvent;
            alert("HTTP Error: " + nativeEvent.statusCode);
          }}
          onNavigationStateChange={(state) => {
            setCanGoBack(state.canGoBack);
            setCanGoForward(state.canGoForward);
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: COLORS.background,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  webViewContainer: {
    flex: 1,
    marginTop: 10,
  },
  webView: {
    flex: 1,
  },
  offlineContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },
  offlineText: {
    fontSize: 18,
    color: COLORS.text,
  },
});

export default GoogleHomeScreen;
