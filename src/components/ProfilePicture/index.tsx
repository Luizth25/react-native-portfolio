import React from "react";
import { Image, Text, View } from "react-native";

import picture from "../../../assets/profile.jpeg";

import { styles } from "./styles";

const ProfilePicture = ({ text }: { text: string }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={picture} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default ProfilePicture;
