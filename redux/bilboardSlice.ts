"use client";
import { createSlice } from "@reduxjs/toolkit";

export interface userType {
  userName: string;
  phoneNumber: string;
}
export interface searchItemType {
  type: string;
  city: string;
  district: string;
  metrage: string;
}
interface initialState_type {
  arrUsers: userType[];
  user: userType;
  selectedComp: string;
  isLogin: boolean;
  searchItem: searchItemType;
}

const initialState: initialState_type = {
  arrUsers: [],
  user: {
    userName: "",
    phoneNumber: "",
  },
  selectedComp: "",
  isLogin: false,
  searchItem: {
    type: "",
    city: "",
    district: "",
    metrage: "",
  },
};

const bilboardSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, { payload }: { payload: userType }) => {
      let tmp = [...state.arrUsers];
      tmp.push(payload);
      if (state.arrUsers.length === 0) {
        state.arrUsers = tmp;
      } else {
        let cardExist = state.arrUsers.find(
          (card) => card.phoneNumber === payload.phoneNumber
        );
        if (cardExist !== undefined) {
          alert("شماره تماس تکراریست!");
        } else {
          state.arrUsers = tmp;
        }
      }
    },
    fillUserAccount: (state, { payload }: { payload: userType }) => {
      state.user.userName = payload.userName;
      state.user.phoneNumber = payload.phoneNumber;
      state.isLogin = true;
    },
    showComponents: (state, { payload }: { payload: string }) => {
      state.selectedComp = payload;
    },
    logOut: (state, { payload }: { payload: boolean }) => {
      state.isLogin = payload;
    },
    fillSearchItem: (state, { payload }: { payload: searchItemType }) => {
      state.searchItem.type = payload.type;
      state.searchItem.city = payload.city;
      state.searchItem.district = payload.district;
      state.searchItem.metrage = payload.metrage;
    },
  },
});

export const {
  addUser,
  fillUserAccount,
  showComponents,
  logOut,
  fillSearchItem,
} = bilboardSlice.actions;
export default bilboardSlice.reducer;
