import React, { FC } from "react";
import { FlatList } from "react-native";
import UserItem from "../UserItem";

import { UserInfo } from "../../types";
import { s } from "./style";

type UserList = {
  items: UserInfo[];
};
const UsersList: FC<UserList> = ({ items }) => {
  return (
    <FlatList
      data={items}
      keyExtractor={(user) => user.id}
      renderItem={({ item }) => <UserItem {...item} />}
      columnWrapperStyle={s.flatList}
      numColumns={2}
    />
  );
};
export default UsersList;
