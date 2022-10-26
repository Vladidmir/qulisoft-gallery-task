import { Image, View } from "react-native";
import { UserStackParamList } from "../../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";

import { s } from "./styles";
import { Ionicons } from "@expo/vector-icons";

interface InfoScreenProps
  extends NativeStackScreenProps<UserStackParamList, "Full"> {}

const InfoScreen = ({ route, navigation }: InfoScreenProps) => {
  const { url } = route.params;
  const onBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={s.root}>
      <Image
        style={s.img}
        source={{
          uri: url,
        }}
      />
      <Ionicons
        onPress={onBackPress}
        style={s.backIcon}
        color={"white"}
        name="arrow-back"
        size={40}
      />
    </View>
  );
};

export default InfoScreen;
