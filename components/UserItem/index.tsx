import { FC } from "react";
import { Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { UserInfo } from "../../types";
import { s } from "./style";

const UserItem: FC<UserInfo> = ({ author, img }) => {
  const navigation = useNavigation<any>();

  const onSelectUser = () => {
    navigation.navigate("Full", { url: img });
  };

  return (
    <TouchableOpacity style={s.block} onPress={onSelectUser}>
      <Image style={s.img} source={{ uri: img }} />
      <Text style={s.by}>Made by</Text>
      <Text style={s.text}>{author}</Text>
    </TouchableOpacity>
  );
};

export default UserItem;
