import { Button, StyleSheet, View } from "react-native";
import { COLORS } from "../utils/colors";

interface WebViewNavigationProps {
  goBack: () => void;
  goForward: () => void;
  reload: () => void;
  canGoBack: boolean;
  canGoForward: boolean;
}

const WebViewNavigation: React.FC<WebViewNavigationProps> = ({
  goBack,
  goForward,
  reload,
  canGoBack,
  canGoForward,
}) => (
  <View style={styles.navBar}>
    <Button title="Back" onPress={goBack} disabled={!canGoBack} />
    <Button title="Forward" onPress={goForward} disabled={!canGoForward} />
    <Button title="Reload" onPress={reload} />
  </View>
);

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: COLORS.background,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
});

export default WebViewNavigation;
