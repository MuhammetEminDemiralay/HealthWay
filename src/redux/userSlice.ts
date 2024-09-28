import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, doc, getDoc, setDoc, } from "firebase/firestore"
import app, { db } from "../../firebaseConfig";
import { Onboarding } from "../model/onboarding";
import { RootState } from "./store";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const setUser = createAsyncThunk("user/set", async (user: Onboarding, { getState }) => {
    try {

        const state = getState() as RootState;
        const uid = state.auth.uid
        const ref = doc(db, "user", `${uid}`)

        await setDoc(ref, user)
        await AsyncStorage.setItem("_user", JSON.stringify(user))

    } catch (error) {
        throw error
    }
})

export const getUser = createAsyncThunk("user/get", async (_, { getState }) => {
    try {
        const state = getState() as RootState;
        const ref = doc(db, "user", `${state.auth.uid}`)
        const data = (await getDoc(ref)).data();

        return data

    } catch (error) {
        throw error
    }
})

export const setDietCalculate = createAsyncThunk("set/dietCaklculate", async (_, { getState }) => {
    try {

        const { onboarding } = getState() as RootState
    } catch (error) {

    }
})




const userSlice = createSlice({
    name: "user",
    initialState: {

    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, (state, action) => {

            })
            .addCase(getUser.fulfilled, (state, action) => {

            })
            .addCase(getUser.rejected, (state, action) => {

            })
    }
})


export default userSlice.reducer