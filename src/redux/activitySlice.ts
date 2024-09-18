import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Content, DailyCalorie, DataModel, Params } from "../model/activity";
import { RootState } from "./store";
import AsyncStorage from "@react-native-async-storage/async-storage";



export const setFoodAsyncstorage = createAsyncThunk("set/foodAsyncstorage", async ({ foodName, amountState }: Params, { getState }) => {
    try {

        const state: RootState = getState() as RootState

        const newData = {
            foodName: foodName,
            amount: 1,
            day: state.activity.activeDate,
            mealTime: state.activity.activeMealFoodCategory
        }
        let allDataOfDay: DataModel[] = []

        const isKey = (await AsyncStorage.getAllKeys()).find((item: string) => item == state.activity.activeDate.toDateString())
        if (isKey != undefined) {
            const datas = await AsyncStorage.getItem(`${state.activity.activeDate.toDateString()}`)
            if (datas != null) {
                allDataOfDay = JSON.parse(datas)
            }
        }

        if (allDataOfDay.find((item: DataModel) => item.foodName == foodName) == undefined) {
            allDataOfDay.push(newData)
        } else {
            if (allDataOfDay.find((item: DataModel) => item.mealTime == newData.mealTime) == undefined) {
                allDataOfDay.push(newData)  //Meal control
            } else {
                if (amountState == undefined) {
                    const index = allDataOfDay.findIndex((item: DataModel) => item.foodName == foodName)
                    allDataOfDay.splice(index, 1)
                } else {
                    const updatedData = allDataOfDay.map((item: DataModel) =>
                        item.foodName == foodName && item.mealTime == newData.mealTime ?
                            { ...item, amount: amountState == 'up' ? item.amount + 1 : amountState == 'down' && item.amount != 1 ? item.amount - 1 : item.amount }
                            : item
                    )
                    allDataOfDay = updatedData;
                }
            }
        }
        await AsyncStorage.setItem(`${state.activity.activeDate.toDateString()}`, JSON.stringify(allDataOfDay))

        return allDataOfDay

    } catch (error) {
        console.log(error);
        throw error
    }
})

export const getFoodAsyncstorage = createAsyncThunk("get/foodAsyncstorage", async (_, { getState }) => {
    try {

        const state: RootState = getState() as RootState

        const result = await AsyncStorage.getItem(`${state.activity.activeDate.toDateString()}`)

        return result != null ? JSON.parse(result) : []



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
    activeMealFoodCategory: "",
    allDataOfTheDay: []
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
                state.foodsConsumed = [...state.foodsConsumed, { foodName: action.payload, amount: 1, day: state.activeDate, mealTime: state.activeMealFoodCategory }];
            } else {
                state.foodsConsumed = state.foodsConsumed.map((item: Content) =>
                    item.foodName == action.payload ? { ...item, amount: item.amount + 1 } : item
                )
            }
        },
        setActiveDate: (state, action) => {
            state.activeDate = action.payload;
        },
        setActiveMealFoodCategory: (state, action) => {
            state.activeMealFoodCategory = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(setFoodAsyncstorage.pending, (state, action) => {

            })
            .addCase(setFoodAsyncstorage.fulfilled, (state, action) => {
                state.allDataOfTheDay = action.payload;
            })
            .addCase(setFoodAsyncstorage.rejected, (state, action) => {

            })

            .addCase(getFoodAsyncstorage.pending, (state, action) => {

            })
            .addCase(getFoodAsyncstorage.fulfilled, (state, action) => {
                state.allDataOfTheDay = action.payload;
            })
            .addCase(getFoodAsyncstorage.rejected, (state, action) => {

            })
    }
})



export default activitySlice.reducer
export const { setDailyRequiredCalories, setCaloriesConsumed, setActiveDate, setActiveMealFoodCategory } = activitySlice.actions 