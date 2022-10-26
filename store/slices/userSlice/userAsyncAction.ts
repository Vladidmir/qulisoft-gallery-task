import { UserSlice } from "./index";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UserInfo } from "../../../types";

export const fetchUsers = createAsyncThunk<
  UserInfo[],
  undefined,
  {
    state: { usersReducer: UserSlice };
  }
>(
  "@user/fetchUsers",
  async () => {
    const { data } = await axios.get(
      "https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9"
    );

    const transformData = data.map(
      (item: {
        id: string;
        user: { name: string };
        urls: { full: string };
      }) => {
        return { id: item.id, author: item.user.name, img: item.urls.full };
      }
    );

    return transformData;
  },

  {
    condition: (_, { getState }) => {
      const { status } = getState().usersReducer;
      if (status === "loading") {
        return false;
      }
    },
  }
);
