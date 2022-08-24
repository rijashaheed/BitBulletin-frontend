import * as React from "react";
import { View, ActivityIndicator} from "react-native";
import {colors} from '../resources/colors';

const Loader = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator
        size="large"
        style={{ transform: [{ scale: 1.2 }] }}
        color={colors.red}
      />
    </View>
  )
};

export default Loader;
