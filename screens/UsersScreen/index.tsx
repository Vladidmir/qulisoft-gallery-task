import React, { useEffect } from "react";
import { SafeAreaView, Text, ActivityIndicator, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../../store";

import UsersList from "../../components/UsersList";
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

  const content = status == "finished" && <UsersList items={items} />;

  return (
    <SafeAreaView style={s.root}>
      {errorMassage}
      {spinner}
      {content}
    </SafeAreaView>
  );
};

export default UsersScreen;
