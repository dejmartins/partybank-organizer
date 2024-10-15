import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  data: {},
  sub: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { payload } = action;
      state.data = { ...state.data, ...payload };
    },

    setUserSub: (state, action) => {
      const { payload } = action;
      state.sub = { ...payload };
    },
    clearUser: (state) => {
      state.data = {};
    },
    clearUserSub: (state) => {
      state.sub = {};
    },
  },
});

export const { setUser, clearUser, setUserSub, clearUserSub } =
  userSlice.actions;

export default userSlice.reducer;
