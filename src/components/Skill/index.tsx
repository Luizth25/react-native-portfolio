import React from "react";
import { Text, View } from "react-native";

import StarRating from "./StarRating";

import { styles } from "./styles";
import { TSkillProps } from "./types";

export function Skill({ rating, skillName }: TSkillProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.skillName}>{skillName}:</Text>
      </View>
      <View>
        <StarRating percentage={rating} />
      </View>
    </View>
  );
}
