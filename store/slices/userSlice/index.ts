import { createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "../../../types";
import { fetchUsers } from "./userAsyncAction";

export type UserSlice = {
  status: "idle" | "loading" | "finished" | "error";
  items: UserInfo[];
};
const initialState: UserSlice = {
  status: "idle",
  items: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.items = payload;
      state.status = "finished";
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.status = "error";
      state.items = [];
    });
  },
});

const { actions, reducer } = userSlice;

export default reducer;
