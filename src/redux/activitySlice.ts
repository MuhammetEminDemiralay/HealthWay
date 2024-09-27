import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Content, DailyCalorie, Exercise, ExerciseDataModel, ExerciseParams, FoodDataModel, FoodParams, Params } from "../model/activity";
import { RootState } from "./store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { exercise } from "../datas/exercise";



export const setAsyncstorage = createAsyncThunk("set/foodAsyncstorage", async ({ food, exercise, subject }: Params, { getState }) => {
    try {
        const state: RootState = getState() as RootState

        const newFoodData: Content = {
            foodName: food?.foodName,
            amount: 1,
            day: state.activity.activeDate,
            mealTime: state.activity.activeMealFoodCategory,
        }

        const newExerciseData: ExerciseParams = {
            exerciseName: exercise?.exerciseName,
            time: exercise?.time != undefined ? exercise?.time : 30,
            options: exercise?.options
        }


        let allDailyFoodData: Content[] = []
        let allDailyExerciseData: ExerciseParams[] = []

        const isKey = (await AsyncStorage.getAllKeys()).find((date: string) => date == state.activity.activeDate.toDateString())
        if (isKey != undefined) {
            const datas = await AsyncStorage.getItem(`${state.activity.activeDate.toDateString()}`)

            if (datas != null) {
                const parseData = JSON.parse(datas);
                allDailyFoodData = parseData.data;
                allDailyExerciseData = parseData.exercise;
            }
        }


        // FOOD
        if (subject == 'food') {
            if (allDailyFoodData.find((item: Content) => item.foodName == food?.foodName) == undefined) {
                allDailyFoodData.push(newFoodData)
            } else {
                if (allDailyFoodData.find((item: Content) => item.mealTime == newFoodData.mealTime) == undefined) {
                    allDailyFoodData.push(newFoodData)  //Meal control
                } else {
                    if (food?.foodName == undefined) {
                        const index = allDailyFoodData.findIndex((item: Content) => item.foodName == food?.foodName)
                        allDailyFoodData.splice(index, 1)
                    } else {
                        let clearFood = false;
                        const updatedData = allDailyFoodData.map((item: Content) => {
                            if (item.foodName == food.foodName && item.mealTime == newFoodData.mealTime) {
                                let updateAmount = item.amount
                                if (food.amountState === 'up') {
                                    updateAmount += 1;
                                }
                                else if (food.amountState === 'down' && item.amount !== 1) {
                                    updateAmount -= 1;
                                }
                                else if (food.amountState === 'down' && item.amount == 1) {
                                    clearFood = true;
                                }
                                updateAmount = Math.max(1, updateAmount);
                                return {
                                    ...item,
                                    amount: updateAmount
                                };
                            } else {
                                return item
                            }
                        })

                        if (clearFood) {
                            const index = allDailyFoodData.findIndex((item: Content) => item.foodName == food?.foodName)
                            allDailyFoodData.splice(index, 1)
                        } else {
                            allDailyFoodData = updatedData;
                        }

                    }
                }
            }
        }
        //Exercise
        else if (subject == 'exercise') {


            allDailyExerciseData.some(
                ({ exerciseName, options }) =>
                    exerciseName === newExerciseData.exerciseName && options === newExerciseData.options
            )

                ? allDailyExerciseData = allDailyExerciseData.map(item =>
                    item.exerciseName === newExerciseData.exerciseName && item.options === newExerciseData.options
                        ? { ...item, ...newExerciseData }
                        : item
                ).filter(({ exerciseName, options, time }) =>
                    !(
                        exerciseName === newExerciseData.exerciseName &&
                        options === newExerciseData.options &&
                        time === newExerciseData.time
                    )
                ) :
                allDailyExerciseData = [...allDailyExerciseData, newExerciseData];

        }


        await AsyncStorage.setItem(`${state.activity.activeDate.toDateString()}`, JSON.stringify({ data: allDailyFoodData, exercise: allDailyExerciseData }))

        return allDailyFoodData

    } catch (error) {
        console.log(error);
        throw error
    }
})

export const getAsyncstorage = createAsyncThunk("get/foodAsyncstorage", async (_, { getState }) => {
    try {

        const state: RootState = getState() as RootState

        const allKeys = await AsyncStorage.getAllKeys();
        const filterKeys = allKeys.filter((item: string) => item != '_token' && item != '_uid' && item != '_user')

        let allDailyFoodData: FoodDataModel[] = []
        let allDailyExerciseData: ExerciseDataModel[] = []

        for (let key of filterKeys) {
            const data = await AsyncStorage.getItem(key)


            let parseData;
            if (data != null) {
                parseData = JSON.parse(data)
            }
            if (parseData.data != undefined) {
                allDailyFoodData.push({ date: new Date(key), data: parseData.data })
            }
            if (parseData.exercise != undefined) {
                allDailyExerciseData.push({ date: new Date(key), exercise: parseData.exercise })
            }
        }

        const datas = {
            allDailyFoodData: allDailyFoodData,
            allDailyExerciseData: allDailyExerciseData
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
    allDailyFoodData: [],
    allDailyExerciseData: [],
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
            state.activeData = state.allDailyFoodData.find((item: FoodDataModel) => item.date?.toDateString() === state.activeDate.toDateString())
        },
        setActiveMealFoodCategory: (state, action) => {
            state.activeMealFoodCategory = action.payload;
        },
        setFoodRedux: (state, action: PayloadAction<FoodParams>) => {

            const isDate = state.allDailyFoodData.find((item: FoodDataModel) => item.date?.toDateString() == state.activeDate.toDateString())

            const newFoodData: Content = {
                foodName: action.payload.foodName,
                amount: 1,
                day: new Date(),
                mealTime: state.activeMealFoodCategory
            }

            if (isDate == undefined) {
                state.allDailyFoodData = [...state.allDailyFoodData, { data: [newFoodData], date: state.activeDate }]
            } else {
                const isFood = isDate.data.find((item: Content) => item.foodName == action.payload.foodName)
                if (isFood == undefined) {
                    state.allDailyFoodData = state.allDailyFoodData.map((item: FoodDataModel) =>
                        item.date?.toDateString() === state.activeDate.toDateString()
                            ? { ...item, data: [...item.data, newFoodData] }
                            : item
                    );
                } else {

                    if (action.payload.amountState == 'up') {
                        state.allDailyFoodData = state.allDailyFoodData.map((item: FoodDataModel) =>
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
                            state.allDailyFoodData = state.allDailyFoodData.map((item: FoodDataModel) =>
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
                            state.allDailyFoodData = state.allDailyFoodData.map((item: FoodDataModel) =>
                                item.date?.toDateString() == state.activeDate.toDateString() ?
                                    { ...item, data: item.data.filter((data: Content) => data.foodName != action.payload.foodName) }
                                    : item
                            )
                        }
                    } else if (action.payload.amountState != 'up' && action.payload.amountState != 'down') {
                        state.allDailyFoodData = state.allDailyFoodData.map((item: FoodDataModel) =>
                            item.date?.toDateString() == state.activeDate.toDateString() ?
                                { ...item, data: item.data.filter((data: Content) => data.foodName != action.payload.foodName) }
                                : item
                        )
                    }
                }
            }
        },
        setExerciseRedux: (state, action: PayloadAction<ExerciseParams>) => {

            const newExerciseData: ExerciseParams = {
                exerciseName: action.payload.exerciseName,
                time: action.payload.time == undefined ? 30 : action.payload.time,
                options: action.payload.options
            }

            const isDateExercise = state.allDailyExerciseData.find(({ date }) => date.toDateString() == state.activeDate.toDateString())
            console.log("newExerciseData redux", newExerciseData);


            if (isDateExercise == undefined) {
                state.allDailyExerciseData = [...state.allDailyExerciseData, { date: state.activeDate, exercise: [newExerciseData] }]
            } else {
                state.allDailyExerciseData = state.allDailyExerciseData.map((item) =>
                    item.date.toDateString() === state.activeDate.toDateString() ?
                        {
                            ...item,
                            exercise: item.exercise.some((exerciseItem) =>
                                exerciseItem.exerciseName === newExerciseData.exerciseName &&
                                exerciseItem.options === newExerciseData.options
                            )
                                ? item.exercise.map((exerciseItem) =>
                                    exerciseItem.exerciseName === newExerciseData.exerciseName &&
                                        exerciseItem.options === newExerciseData.options
                                        ? { ...exerciseItem, ...newExerciseData }
                                        : exerciseItem
                                ).filter((exerciseItem) =>
                                    !(
                                        exerciseItem.exerciseName === newExerciseData.exerciseName &&
                                        exerciseItem.options === newExerciseData.options &&
                                        exerciseItem.time === newExerciseData.time
                                    )
                                )
                                : [...item.exercise, newExerciseData],
                        } :
                        item
                );
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
            .addCase(setAsyncstorage.pending, (state, action) => {

            })
            .addCase(setAsyncstorage.fulfilled, (state, action) => {

            })
            .addCase(setAsyncstorage.rejected, (state, action) => {

            })

            .addCase(getAsyncstorage.pending, (state, action) => {

            })
            .addCase(getAsyncstorage.fulfilled, (state, action) => {
                state.allDailyFoodData = action.payload.allDailyFoodData;
                state.allDailyExerciseData = action.payload.allDailyExerciseData;
            })
            .addCase(getAsyncstorage.rejected, (state, action) => {

            })
    }
})



export default activitySlice.reducer
export const { setDailyRequiredCalories, setCaloriesConsumed, setActiveDate, setActiveMealFoodCategory, setFoodRedux, setExerciseRedux, setProductInformation, setActiveData } = activitySlice.actions 