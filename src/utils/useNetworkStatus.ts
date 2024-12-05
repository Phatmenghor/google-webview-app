import { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";

/**
 * Custom hook to monitor network connectivity status.
 * Returns `true` if connected, `false` if disconnected.
 */
export const useNetworkStatus = (): boolean => {
  const [isConnected, setIsConnected] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      // Ensure the value is boolean, even when it's null
      setIsConnected(state.isConnected ?? false);
    });

    return () => unsubscribe(); // Cleanup the listener on unmount
  }, []);

  return isConnected;
};
