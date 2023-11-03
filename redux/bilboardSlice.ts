"use client"
import { createSlice } from "@reduxjs/toolkit";

export interface userType {
  userName: string;
  phoneNumber: string;
}

interface initialState_type {
  arrUsers: userType[];
  user: userType;
}

const initialState: initialState_type = {
  arrUsers: [],
  user: {
    userName: "",
    phoneNumber: "",
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
    },
    //   addTrasaction: (state, { payload }: { payload: tarakoneshType }) => {
    //     let tmp = [...state.arrTrasaction];
    //     tmp.push(payload);
    //     state.arrTrasaction = tmp;
    //   },
    //   clickOnCard: (state, { payload }: { payload: string }) => {
    //     state.witchCards = payload;
    //   },
    //   findFillTransfer: (state, { payload }: { payload: infoCartType }) => {
    //     state.selectedCard.adressImg = payload.adressImg;
    //     state.selectedCard.cvv2 = payload.cvv2;
    //     state.selectedCard.month = payload.month;
    //     state.selectedCard.year = payload.year;
    //     state.selectedCard.shomareCart = payload.shomareCart;
    //     state.selectedCard.mojodi = payload.mojodi;
    //   },
    //   reduceValue: (state, { payload }: { payload: number }) => {
    //     let s = state.arrCards.find(
    //       (elm) => elm.shomareCart === state.selectedCard.shomareCart
    //     );
    //     if (s !== undefined) {
    //       s.mojodi -= payload;
    //     }
    //   },
    //   showTrasactionCard: (state, { payload }: { payload: string }) => {},
    // },
  },
});

export const { addUser , fillUserAccount } = bilboardSlice.actions;
export default bilboardSlice.reducer;
