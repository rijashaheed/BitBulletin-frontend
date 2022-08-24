import { useTheme } from "@react-navigation/native";
import * as React from "react";
import { View, ActivityIndicator, Text } from "react-native";

const Loader = () => {
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator
        size="large"
        style={{ transform: [{ scale: 1.2 }] }}
        color={colors['primarytextColor']}
      />
    </View>
  )
};

export default Loader;
