import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Content, DailyCalorie } from "../model/activity";
import { RootState } from "./store";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const setFoodAsyncstorage = createAsyncThunk("set/foodAsyncstorage", async (foodName: string, { getState }) => {
    try {

        const state: RootState = getState() as RootState
        await AsyncStorage.setItem(`_${state.activity.activeDate}`, JSON.stringify({ foodName: foodName, amount: 1 }))

    } catch (error) {
        console.log(error);
        throw error
    }
})



const initialState: DailyCalorie = {
    dailyRequiredCalories: {
        calorie: null,
        percentage: {
            carbohydrare: null,
            fat: null,
            protein: null
        }
    },
    foodsConsumed: [],
    activeDate: new Date(),
    activeFoodCategory: ""
}

const activitySlice = createSlice({
    name: 'activity',
    initialState,
    reducers: {
        setDailyRequiredCalories: (state, action) => {
            state.dailyRequiredCalories = action.payload;
        },
        setCaloriesConsumed: (state, action) => {
            const available = state.foodsConsumed.find(item => item.foodName == action.payload)
            if (available == undefined) {
                state.foodsConsumed = [...state.foodsConsumed, { foodName: action.payload, amount: 1, time: state.activeDate }];
            } else {
                state.foodsConsumed = state.foodsConsumed.map((item: Content) =>
                    item.foodName == action.payload ? { ...item, amount: item.amount + 1 } : item
                )
            }
        },
        setActiveDate: (state, action) => {
            state.activeDate = action.payload;
        },
        setActiveFoodCategory: (state, action) => {
            state.activeFoodCategory = action.payload;
        }
    },
    extraReducers: (builder) => {

    }
})



export default activitySlice.reducer
export const { setDailyRequiredCalories, setCaloriesConsumed, setActiveDate, setActiveFoodCategory } = activitySlice.actions 