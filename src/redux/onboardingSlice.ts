import { createSlice } from "@reduxjs/toolkit";
import { Onboarding } from "../model/onboarding";



const initialState: Onboarding = {
    target: [],
    reasons: [],
    bal: {
        level: "",
        description: "",
        examples: ""
    },
    genderAge: {
        gender: "",
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
        removeTarget: (state, action) => {
            const filterData = state.target.filter(item => item != action.payload)
            state.target = filterData;
        },
        setReasons: (state, action) => {
            const reasonsItem = state.reasons.find(item => item == action.payload)
            reasonsItem == undefined ?
                state.reasons = [...state.reasons, action.payload] :
                state.reasons = state.reasons.filter(item => item != reasonsItem)
        },
        setBal: (state, action) => {
            state.bal = action.payload;
        },
        setGenderAge: (state, action) => {
            state.genderAge = action.payload;
            console.log(action.payload);

        },
        setHeightWeight: (state, action) => {
            state.heightWeight = action.payload;
        },
        setWeeklyTarget: (state, action) => {
            state.weeklyTarget = action.payload;
        }
    }
})


export const { setTarget, removeTarget, setReasons, setBal, setGenderAge, setHeightWeight, setWeeklyTarget } = onboardingSlice.actions;
export default onboardingSlice.reducer