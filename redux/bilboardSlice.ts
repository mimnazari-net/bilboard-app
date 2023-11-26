"use client";
import { createSlice } from "@reduxjs/toolkit";

export interface sellsItemType {
  id: number;
  image: string;
  type: string;
  loc: string;
  price: number;
  bed: string;
  bath: string;
  eachm: number;
  city: string;
  street: string;
  metrage: number;
  age: number;
  tag: string;
}

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
  sellsArray: sellsItemType[];
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
  sellsArray: [
    {
      id: 1,
      image: "/image/forushx1.png",
      type: "آپارتمان",
      loc: "نیاوران",
      price: 447250000000,
      bed: "5",
      bath: "3",
      eachm: 15000000,
      city: "مازندران",
      street: "نیاوران",
      metrage: 315,
      age: 5,
      tag: "خرید",
    },
    {
      id: 2,
      image: "/image/forushx2.png",
      type: "آپارتمان",
      loc: "فرمانیه",
      price: 447250000000,
      bed: "5",
      bath: "3",
      eachm: 100000000,
      city: "تهران",
      street: "فرمانیه",
      metrage: 800,
      tag: "خرید",
      age: 5,
    },
    {
      id: 3,
      image: "/image/forushx3.png",
      type: "آپارتمان",
      loc: "شهرک غرب",
      price: 247250000000,
      bed: "6",
      bath: "4",
      eachm: 12000000,
      city: "تهران",
      street: "کاج",
      metrage: 600,
      tag: "خرید",
      age: 5,
    },
    {
      id: 4,
      image: "/image/forushx4.png",
      type: "آپارتمان",
      loc: "نیاوران",
      price: 127250000000,
      bed: "3",
      bath: "2",
      eachm: 130000000,
      city: "اصفهان",
      street: "جنت آباد شمالی",
      metrage: 360,
      tag: "خرید",
      age: 4,
    },
    {
      id: 5,
      image: "/image/forush.png",
      type: "آپارتمان",
      loc: "نیاوران",
      price: 4000000000,
      bed: "1",
      bath: "3",
      eachm: 21000000,
      city: "تهران",
      street: "نیاوران",
      metrage: 620,
      tag: "رهن",
      age: 2,
    },
    {
      id: 6,
      image: "/image/forush2.png",
      type: "آپارتمان",
      loc: "نیاوران",
      price: 50000000000,
      bed: "5",
      bath: "3",
      eachm: 50000000,
      city: "گیلان",
      street: "خورودین",
      metrage: 700,
      tag: "رهن",
      age: 10,
    },
    {
      id: 7,
      image: "/image/forush3.png",
      type: "آپارتمان",
      loc: "میردادماد",
      price: 47250000000,
      bed: "1",
      bath: "1",
      eachm: 19000000,
      city: "مشهد",
      street: "میردادماد",
      metrage: 100,
      tag: "رهن",
      age: 15,
    },
    {
      id: 8,
      image: "/image/forush4.png",
      type: "آپارتمان",
      loc: "ونک",
      price: 90250000000,
      bed: "2",
      bath: "2",
      eachm: 30000000,
      city: "گیلان",
      street: "ونک",
      metrage: 260,
      tag: "رهن",
      age: 9,
    },
    {
      id: 9,
      image: "/image/forush.png",
      type: "آپارتمان",
      loc: "صادقیه",
      price: 30250000000,
      bed: "2",
      bath: "1",
      eachm: 17000000,
      city: "شیراز",
      street: "صادقیه",
      metrage: 530,
      tag: "رهن",
      age: 0,
    },
    {
      id: 10,
      image: "/image/forush2.png",
      type: "آپارتمان",
      loc: "نارمک",
      price: 97250000000,
      bed: "2",
      bath: "1",
      eachm: 16000000,
      city: "اصفهان",
      street: "نارمک",
      metrage: 180,
      tag: "رهن",
      age: 0,
    },
    {
      id: 11,
      image: "/image/forush3.png",
      type: "آپارتمان",
      loc: "نیاوران",
      price: 87250000000,
      bed: "3",
      bath: "3",
      eachm: 53000000,
      city: "اصفهان",
      street: "نیاوران",
      metrage: 560,
      tag: "اجاره",
      age: 14,
    },
    {
      id: 12,
      image: "/image/forush4.png",
      type: "آپارتمان",
      loc: "نیاوران",
      price: 257250000000,
      bed: "3",
      bath: "3",
      eachm: 18000000,
      city: "مازندران",
      street: "نیاوران",
      metrage: 430,
      tag: "اجاره",
      age: 7,
    },
    {
      id: 13,
      image: "/image/forush.png",
      type: "آپارتمان",
      loc: "نیاوران",
      price: 100250000000,
      bed: "4",
      bath: "3",
      eachm: 41000000,
      city: "گیلان",
      street: "نیاوران",
      metrage: 230,
      tag: "اجاره",
      age: 16,
    },
    {
      id: 14,
      image: "/image/forush2.png",
      type: "آپارتمان",
      loc: "نیاوران",
      price: 467250000000,
      bed: "4",
      bath: "3",
      eachm: 250000000,
      city: "کیش",
      street: "نیاوران",
      metrage: 360,
      tag: "اجاره",
      age: 25,
    },
    {
      id: 15,
      image: "/image/forush3.png",
      type: "آپارتمان",
      loc: "نیاوران",
      price: 537250000000,
      bed: "5",
      bath: "3",
      eachm: 35000000,
      city: "شیراز",
      street: "نیاوران",
      metrage: 300,
      tag: "اجاره",
      age: 0,
    },
    {
      id: 16,
      image: "/image/forush4.png",
      type: "آپارتمان",
      loc: "نیاوران",
      price: 427250000000,
      bed: "3",
      bath: "3",
      eachm: 190000000,
      city: "مشهد",
      street: "نیاوران",
      metrage: 170,
      tag: "اجاره",
      age: 1,
    },
    {
      id: 17,
      image: "/image/forush.png",
      type: "آپارتمان",
      loc: "نیاوران",
      price: 477250000000,
      bed: "3",
      bath: "3",
      eachm: 25000000,
      city: "کیش",
      street: "نیاوران",
      metrage: 65,
      tag: "خرید",
      age: 8,
    },
    {
      id: 18,
      image: "/image/forush2.png",
      type: "آپارتمان",
      loc: "نیاوران",
      price: 479250000000,
      bed: "5",
      bath: "3",
      eachm: 34000000,
      city: "کیش",
      street: "نیاوران",
      metrage: 450,
      tag: "خرید",
      age: 12,
    },
    {
      id: 19,
      image: "/image/forush3.png",
      type: "آپارتمان",
      loc: "نیاوران",
      price: 476250000000,
      bed: "4",
      bath: "3",
      eachm: 360000000,
      city: "تهران",
      street: "نیاوران",
      metrage: 250,
      tag: "رهن",
      age: 19,
    },
    {
      id: 20,
      image: "/image/forush4.png",
      type: "آپارتمان",
      loc: "نیاوران",
      price: 457250000000,
      bed: "5",
      bath: "3",
      eachm: 290000000,
      city: "تهران",
      street: "نیاوران",
      metrage: 200,
      tag: "رهن",
      age: 30,
    },
  ],
};

const bilboardSlice = createSlice({
  name: "bilboard",
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
