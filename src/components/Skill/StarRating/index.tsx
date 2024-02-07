import React from "react";
import { View } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

const StarRating = ({ percentage }: { percentage: number }) => {
  const numberOfStars = 5;
  const filledStars = Math.round((percentage / 100) * numberOfStars);

  const stars = [];
  for (let i = 0; i < numberOfStars; i++) {
    if (i < filledStars) {
      stars.push(<FontAwesome key={i} name="star" size={20} color="gold" />);
    } else {
      stars.push(<FontAwesome key={i} name="star" size={20} color="gray" />);
    }
  }

  return <View style={{ flexDirection: "row" }}>{stars}</View>;
};

export default StarRating;
