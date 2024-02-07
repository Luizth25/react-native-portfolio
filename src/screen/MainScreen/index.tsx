import React from "react";
import { View } from "react-native";

import { StatusBar } from "expo-status-bar";

import ProfilePicture from "../../components/ProfilePicture";
import { LinkButton } from "../../components/LinkButton";

const MainScreen = () => {
  return (
    <>
      <StatusBar style="light" />
      <View>
        <ProfilePicture text="Luiz Felipe Thomaz Preto" />
      </View>
      <View style={{ display: "flex", gap: 24 }}>
        <LinkButton
          iconName="linkedin"
          iconColor="blue"
          linkName="LinkedIn"
          url="https://www.linkedin.com/in/luiz-preto/"
        />
        <LinkButton
          iconName="github"
          iconColor="gray"
          linkName="Github"
          url="https://github.com/Luizth25"
        />
        <LinkButton
          iconName="gmail"
          iconColor="white"
          linkName="E-mail"
          url="mailto:luizftp25@gmail.com"
        />
      </View>
    </>
  );
};

export default MainScreen;
