import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
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

        if (allDataOfDay.find((item: DataModel) => item.data.foodName == foodName) == undefined) {
            allDataOfDay.push(newData)
        } else {
            if (allDataOfDay.find((item: DataModel) => item.data.mealTime == newData.mealTime) == undefined) {
                allDataOfDay.push(newData)  //Meal control
            } else {
                if (amountState == undefined) {
                    const index = allDataOfDay.findIndex((item: DataModel) => item.data.foodName == foodName)
                    allDataOfDay.splice(index, 1)
                } else {
                    const updatedData = allDataOfDay.map((item: DataModel) =>
                        item.data.foodName == foodName && item.data.mealTime == newData.mealTime ?
                            { ...item, amount: amountState == 'up' ? item.data.amount + 1 : amountState == 'down' && item.data.amount != 1 ? item.data.amount - 1 : item.data.amount }
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

        const allKeys = await AsyncStorage.getAllKeys();
        const filterKeys = allKeys.filter((item: string) => item != '_token' && item != '_uid' && item != '_user')

        let datas: DataModel[] = []
        for (let key of filterKeys) {
            const data = await AsyncStorage.getItem(key)
            if (data != null) {
                datas.push({ date: new Date(key), data: JSON.parse(data) })
            }
        }
        return datas

    } catch (error) {
        console.log(error);
        throw error
    }
})



const initialState: DailyCalorie = {
    dailyRequiredCalories: {
        calorie: null,
        percentage: {
            carbohydrate: null,
            fat: null,
            protein: null
        }
    },
    foodsConsumed: [],
    activeDate: new Date(),
    activeData: null,
    activeMealFoodCategory: "",
    allDataOfTheDay: [],
    productInformation: []
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
        setActiveData: (state) => {
            state.activeData = state.allDataOfTheDay.find((item: DataModel) => item.date?.toDateString() === state.activeDate.toDateString())
        },
        setActiveMealFoodCategory: (state, action) => {
            state.activeMealFoodCategory = action.payload;
        },
        setFoodRedux: (state, action: PayloadAction<Params>) => {

            const isDate = state.allDataOfTheDay.find((item: DataModel) => item.date?.toDateString() == state.activeDate.toDateString())

            const newData = {
                foodName: action.payload.foodName,
                amount: 1,
                day: new Date(),
                mealTime: state.activeMealFoodCategory
            }


            if (isDate == undefined) {
                state.allDataOfTheDay = [...state.allDataOfTheDay, { data: [newData], date: state.activeDate }]
            } else {
                const isFood = isDate.data.find((item: Content) => item.foodName == action.payload.foodName)
                if (isFood == undefined) {
                    state.allDataOfTheDay = state.allDataOfTheDay.map((item: DataModel) =>
                        item.date?.toDateString() === state.activeDate.toDateString()
                            ? { ...item, data: [...item.data, newData] }
                            : item
                    );
                } else {

                    if (action.payload.amountState == 'up') {
                        state.allDataOfTheDay = state.allDataOfTheDay.map((item: DataModel) =>
                            item.date?.toDateString() === state.activeDate.toDateString() ?
                                {
                                    ...item, data: item.data.map(((prev: Content) =>
                                        prev.foodName === action.payload.foodName ? { ...prev, amount: prev.amount + 1 } : prev
                                    ))
                                } :
                                item
                        );
                    } else if (action.payload.amountState == 'down') {

                        if (isDate.data.find(item => item.foodName == action.payload.foodName)?.amount != 1) {
                            state.allDataOfTheDay = state.allDataOfTheDay.map((item: DataModel) =>
                                item.date?.toDateString() === state.activeDate.toDateString() ?
                                    {
                                        ...item, data: item.data.map(((prev: Content) =>
                                            prev.foodName == action.payload.foodName ?
                                                { ...prev, amount: prev.amount != 1 ? prev.amount - 1 : 0 } :
                                                prev
                                        ))
                                    } :
                                    item
                            );
                        } else {
                            state.allDataOfTheDay = state.allDataOfTheDay.map((item: DataModel) =>
                                item.date?.toDateString() == state.activeDate.toDateString() ?
                                    { ...item, data: item.data.filter((data: Content) => data.foodName != action.payload.foodName) }
                                    : item
                            )
                        }



                    } else if (action.payload.amountState != 'up' && action.payload.amountState != 'down') {
                        state.allDataOfTheDay = state.allDataOfTheDay.map((item: DataModel) =>
                            item.date?.toDateString() == state.activeDate.toDateString() ?
                                { ...item, data: item.data.filter((data: Content) => data.foodName != action.payload.foodName) }
                                : item
                        )
                    }
                }
            }

        },
        setProductInformation: (state, action) => {
            if (action.payload != null) {
                state.productInformation = [...state.productInformation, action.payload]
            } else {
                state.productInformation = []
            }
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
export const { setDailyRequiredCalories, setCaloriesConsumed, setActiveDate, setActiveMealFoodCategory, setFoodRedux, setProductInformation, setActiveData } = activitySlice.actions 