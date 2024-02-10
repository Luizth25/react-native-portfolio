import React from "react";
import { ScrollView, View } from "react-native";

import { StatusBar } from "expo-status-bar";

import ProfilePicture from "../../components/ProfilePicture";
import Skill from "../../components/Skill";

import { styles } from "./styles";

const SkillScreen = () => (
  <View style={styles.container}>
    <StatusBar style="light" />
    <View>
      <ProfilePicture text="Minhas Habilidades" />
    </View>
    <View style={{ display: "flex", gap: 4 }}>
      <Skill skillName="HTML" rating={70} />
      <Skill skillName="CSS" rating={70} />
      <Skill skillName="Typescript" rating={70} />
      <Skill skillName="React" rating={50} />
      <Skill skillName="ReactNative" rating={50} />
      <Skill skillName="Angular" rating={30} />
      <Skill skillName="NodeJs" rating={20} />
      <Skill skillName="Git" rating={50} />
    </View>
  </View>
);

export default SkillScreen;
