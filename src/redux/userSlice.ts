import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, doc, getDoc, setDoc, } from "firebase/firestore"
import app, { db } from "../../firebaseConfig";
import { Onboarding } from "../model/onboarding";
import { RootState } from "./store";


export const setUser = createAsyncThunk("user/set", async (user: Onboarding, { getState }) => {
    try {

        const state = getState() as RootState;
        const uid = state.auth.uid
        const ref = doc(db, "user", `${uid}`)
        await setDoc(ref, user)

    } catch (error) {
        throw error
    }
})

export const getUser = createAsyncThunk("user/get", async () => {
    try {
        const ref = doc(db, "user", "O5idt2kvkNRL38Y0HV1jtGdnbWf2")
        const { data } = await getDoc(ref)
        console.log(data);


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

    }
})


export default userSlice.reducer