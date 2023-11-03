"use client"
import { configureStore } from "@reduxjs/toolkit";
import bilboardSlice from "./bilboardSlice";

export function makeStore(){
  return configureStore({
    reducer:{
      bilboardSlice: bilboardSlice,
    }
  })
}

export const store = makeStore()

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
