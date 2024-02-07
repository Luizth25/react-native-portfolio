import React, { useCallback } from "react";
import { Linking, Pressable, Text, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { TLinkButtonProps } from "./types";

export function LinkButton({
  url,
  linkName,
  iconName,
  iconColor,
}: TLinkButtonProps) {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    }
  }, [url]);

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <View>
        <Text style={styles.linkName}>{linkName}</Text>
      </View>
      <View>
        <MaterialCommunityIcons name={iconName} size={24} color={iconColor} />
      </View>
    </Pressable>
  );
}
