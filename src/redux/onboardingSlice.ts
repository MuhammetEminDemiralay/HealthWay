import { createSlice } from "@reduxjs/toolkit";
import { Onboarding } from "../model/onboarding";



const initialState: Onboarding = {
    target: [],
    reasons: [],
    bal: "",
    genderAge: {
        gender: null,
        age: null
    },
    heightWeight: {
        height: null,
        weight: null
    },
    weeklyTarget: null
}

const onboardingSlice = createSlice({
    name: "onboarding",
    initialState,
    reducers: {
        setTarget: (state, action) => {
            const targetItem = state.target.find(item => item == action.payload)
            targetItem == undefined ?
                state.target = [...state.target, action.payload] :
                state.target = state.target.filter(item => item != targetItem)
        },
        setReasons: (state, action) => {
            state.reasons = action.payload
        },
        setBal: (state, action) => {
            state.bal = action.payload;
        },
        setGenderAge: (state, action) => {
            state.genderAge = action.payload;
        },
        setHeightWeight: (state, action) => {
            state.heightWeight = action.payload;
        },
        setWeeklyTarget: (state, action) => {
            state.weeklyTarget = action.payload;
        }
    }
})


export const { setTarget, setReasons, setBal, setGenderAge, setHeightWeight, setWeeklyTarget } = onboardingSlice.actions;
export default onboardingSlice.reducer