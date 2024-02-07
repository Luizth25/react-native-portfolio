import React, { useCallback } from "react";
import { Linking, Pressable, Text, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { TLinkButtonProps } from "./types";

const LinkButton = ({
  url,
  linkName,
  iconName,
  iconColor,
}: TLinkButtonProps) => {
  const handlePress = useCallback(async () => {
    const supportedLink = await Linking.canOpenURL(url);

    if (supportedLink) {
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
};

export default LinkButton;
