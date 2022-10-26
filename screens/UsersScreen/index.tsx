import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";

import {
  SafeAreaView,
  FlatList,
  Text,
  ActivityIndicator,
  View,
} from "react-native";

import UserItem from "../../components/UserItem";
import { s } from "./style";

import { fetchUsers } from "../../store/slices/userSlice/userAsyncAction";
import { selectUsersData } from "../../store/slices/userSlice/selectors";

const UsersScreen = () => {
  const { items, status } = useAppSelector(selectUsersData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const errorMassage = status == "error" && (
    <Text style={s.error}>У меня плохое настроение, зайдите позже :3</Text>
  );

  const spinner = status == "loading" && (
    <View style={s.wrapErr}>
      <ActivityIndicator size="large" />
    </View>
  );

  return (
    <SafeAreaView style={s.root}>
      {errorMassage}
      {spinner}
      {status == "finished" && (
        <FlatList
          data={items}
          keyExtractor={(user) => user.id}
          renderItem={({ item }) => <UserItem {...item} />}
          columnWrapperStyle={s.flatList}
          numColumns={2}
        />
      )}
    </SafeAreaView>
  );
};

export default UsersScreen;
