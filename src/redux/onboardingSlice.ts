import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Onboarding } from "../model/onboarding";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { bmr, calorieCalculation } from "../helper/calorieCalculation";
import { setDailyRequiredCalories } from "./activitySlice";
import { RootState } from "./store";




export const getUserInfoAsyncstorage = createAsyncThunk("get/userInfoAsyncstorage", async ({ initialInfo }: { initialInfo?: Onboarding }, { dispatch, getState }) => {
    try {

        const userInfo = await AsyncStorage.getItem("_user")
        let info;
        if (userInfo) {
            info = JSON.parse(userInfo)
        }

        console.log("initialInfo", initialInfo);


        const bmrInfo = bmr(info != null ? info : initialInfo)
        const calorie = calorieCalculation(info != null ? info : initialInfo, bmrInfo);
        dispatch(setDailyRequiredCalories(calorie));
        return info;

    } catch (error) {
        throw error
    }
})



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
        age: 0
    },
    heightWeight: {
        height: 0,
        weight: 0
    },
    weeklyTarget: 0,
    updateProfile: false
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
        },
        setHeightWeight: (state, action) => {
            state.heightWeight = action.payload;
        },
        setWeeklyTarget: (state, action) => {
            state.weeklyTarget = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserInfoAsyncstorage.pending, (state, action) => {

            })
            .addCase(getUserInfoAsyncstorage.fulfilled, (state, action) => {
                if (action.payload != null) {
                    state.bal = {
                        description: action.payload.bal.description,
                        examples: action.payload.bal.examples,
                        level: action.payload.bal.level
                    }
                    state.genderAge = {
                        age: action.payload.genderAge.age,
                        gender: action.payload.genderAge.gender
                    }
                    state.heightWeight = {
                        height: action.payload.heightWeight.height,
                        weight: action.payload.heightWeight.weight
                    }
                    state.reasons = action.payload.reasons
                    state.target = action.payload.target
                    state.weeklyTarget = action.payload.weeklyTarget
                    state.updateProfile = true;
                }
            })
            .addCase(getUserInfoAsyncstorage.rejected, (state, action) => {

            })
    }
})


export const { setTarget, removeTarget, setReasons, setBal, setGenderAge, setHeightWeight, setWeeklyTarget } = onboardingSlice.actions;
export default onboardingSlice.reducer