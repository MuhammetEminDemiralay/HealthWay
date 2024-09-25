import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Content, DailyCalorie, DataModel, Exercise, ExerciseParams, Params } from "../model/activity";
import { RootState } from "./store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { exercise } from "../datas/exercise";



export const setAsyncstorage = createAsyncThunk("set/foodAsyncstorage", async ({ food, exercise, subject }: Params, { getState }) => {
    try {
        console.log(exercise);

        const state: RootState = getState() as RootState

        const newFoodData: Content = {
            foodName: food?.foodName,
            amount: 1,
            day: state.activity.activeDate,
            mealTime: state.activity.activeMealFoodCategory,
        }

        const newExerciseData: ExerciseParams = {
            exerciseName: exercise?.exerciseName,
            time: exercise?.time != null ? exercise?.time : 30,
            options: exercise?.options
        }

        console.log("newExerciseData", newExerciseData);
        console.log("subject", subject);



        let exerciseOfTheDay: ExerciseParams[] = []
        let dataOfTheDay: Content[] = []

        const isKey = (await AsyncStorage.getAllKeys()).find((date: string) => date == state.activity.activeDate.toDateString())
        if (isKey != undefined) {
            const datas = await AsyncStorage.getItem(`${state.activity.activeDate.toDateString()}`)
            if (datas != null) {
                const parseData = JSON.parse(datas);
                dataOfTheDay = parseData.data;
                exerciseOfTheDay = parseData.exercise;
            }
        }

        console.log("Exercise", exerciseOfTheDay);


        // FOOD
        if (subject == 'food') {
            if (dataOfTheDay.find((item: Content) => item.foodName == food?.foodName) == undefined) {
                dataOfTheDay.push(newFoodData)
            } else {
                if (dataOfTheDay.find((item: Content) => item.mealTime == newFoodData.mealTime) == undefined) {
                    dataOfTheDay.push(newFoodData)  //Meal control
                } else {
                    if (food?.foodName == undefined) {
                        const index = dataOfTheDay.findIndex((item: Content) => item.foodName == food?.foodName)
                        dataOfTheDay.splice(index, 1)
                    } else {
                        const updatedData = dataOfTheDay.map((item: Content) =>
                            item.foodName == food.foodName && item.mealTime == newFoodData.mealTime ?
                                { ...item, amount: food.amountState == 'up' ? item.amount + 1 : food.amountState == 'down' && item.amount != 1 ? item.amount - 1 : item.amount }
                                : item
                        )
                        dataOfTheDay = updatedData;
                    }
                }
            }
        }
        //Exercise
        else if (subject == 'exercise') {
            console.log("Girdi");

            console.log("isExercise", exerciseOfTheDay);

            const isExercise = exerciseOfTheDay.filter(({ exerciseName }) => exerciseName == exercise?.exerciseName)

            if (isExercise === undefined) {
                console.log("Hop");
                
                exerciseOfTheDay.push(newExerciseData)
            } else {
                const isExerciseOption = isExercise.find(({ options }) => options == newExerciseData.options)
                if (isExerciseOption == undefined) {
                    exerciseOfTheDay.push(newExerciseData)
                } else {
                    if (isExerciseOption.time == newExerciseData.time) {
                        exerciseOfTheDay = exerciseOfTheDay.filter(({ exerciseName }) => exerciseName != isExerciseOption.exerciseName)
                    } else {
                        exerciseOfTheDay = exerciseOfTheDay.map((item: ExerciseParams) =>
                            item.exerciseName == exercise?.exerciseName && item.options == exercise?.options ? { ...item, time: newExerciseData.time } : item
                        )
                    }
                }
            }
        }


        await AsyncStorage.setItem(`${state.activity.activeDate.toDateString()}`, JSON.stringify({ data: dataOfTheDay, exercise: exerciseOfTheDay }))

        return dataOfTheDay

    } catch (error) {
        console.log(error);
        throw error
    }
})

export const getFoodAsyncstorage = createAsyncThunk("get/foodAsyncstorage", async (_, { getState }) => {
    try {

        const state: RootState = getState() as RootState

        const allKeys = await AsyncStorage.getAllKeys();
        const filterKeys = allKeys.filter((item: string) => item != '_token' && item != '_uid' && item != '_user')

        let datas: DataModel[] = []
        for (let key of filterKeys) {
            const data = await AsyncStorage.getItem(key)
            if (data != null) {
                datas.push({ date: new Date(key), data: JSON.parse(data) })
            }
        }

        console.log(datas);



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
    allDailyData: [],
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
            state.activeData = state.allDailyData.find((item: DataModel) => item.date?.toDateString() === state.activeDate.toDateString())
        },
        setActiveMealFoodCategory: (state, action) => {
            state.activeMealFoodCategory = action.payload;
        },
        setFoodRedux: (state, action: PayloadAction<Params>) => {

            const isDate = state.allDailyData.find((item: DataModel) => item.date?.toDateString() == state.activeDate.toDateString())

            const newFoodData: Content = {
                foodName: action.payload.food?.foodName,
                amount: 1,
                day: new Date(),
                mealTime: state.activeMealFoodCategory
            }

            const newExerciseData: ExerciseParams = {
                exerciseName: action.payload.exercise?.exerciseName,
                time: 30,
                options: action.payload.exercise?.options
            }

            // FOOD
            // if (action.payload.subject == 'food') {
            //     if (isDate == undefined) {
            //         state.allDailyData = [...state.allDailyData, { data: [newFoodData], date: state.activeDate }]
            //     } else {
            //         const isFood = isDate.data.find((item: Content) => item.foodName == action.payload.food?.foodName)
            //         if (isFood == undefined) {
            //             state.allDailyData = state.allDailyData.map((item: DataModel) =>
            //                 item.date?.toDateString() === state.activeDate.toDateString()
            //                     ? { ...item, data: [...item.data, newFoodData] }
            //                     : item
            //             );
            //         } else {

            //             if (action.payload.food?.amountState == 'up') {
            //                 state.allDailyData = state.allDailyData.map((item: DataModel) =>
            //                     item.date?.toDateString() === state.activeDate.toDateString() ?
            //                         {
            //                             ...item, data: item.data.map(((prev: Content) =>
            //                                 prev.foodName === action.payload.food?.foodName ? { ...prev, amount: prev.amount + 1 } : prev
            //                             ))
            //                         } :
            //                         item
            //                 );
            //             } else if (action.payload.food?.amountState == 'down') {

            //                 if (isDate.data.find(item => item.foodName == action.payload.food?.foodName)?.amount != 1) {
            //                     state.allDailyData = state.allDailyData.map((item: DataModel) =>
            //                         item.date?.toDateString() === state.activeDate.toDateString() ?
            //                             {
            //                                 ...item, data: item.data.map(((prev: Content) =>
            //                                     prev.foodName == action.payload.food?.foodName ?
            //                                         { ...prev, amount: prev.amount != 1 ? prev.amount - 1 : 0 } :
            //                                         prev
            //                                 ))
            //                             } :
            //                             item
            //                     );
            //                 } else {
            //                     state.allDailyData = state.allDailyData.map((item: DataModel) =>
            //                         item.date?.toDateString() == state.activeDate.toDateString() ?
            //                             { ...item, data: item.data.filter((data: Content) => data.foodName != action.payload.food?.foodName) }
            //                             : item
            //                     )
            //                 }
            //             } else if (action.payload.food?.amountState != 'up' && action.payload.food?.amountState != 'down') {
            //                 state.allDailyData = state.allDailyData.map((item: DataModel) =>
            //                     item.date?.toDateString() == state.activeDate.toDateString() ?
            //                         { ...item, data: item.data.filter((data: Content) => data.foodName != action.payload.food?.foodName) }
            //                         : item
            //                 )
            //             }
            //         }
            //     }
            // }

            // // EXERCİSE
            // else if (action.payload.subject == 'exercise') {



            // }

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

            .addCase(getFoodAsyncstorage.pending, (state, action) => {

            })
            .addCase(getFoodAsyncstorage.fulfilled, (state, action) => {
            })
            .addCase(getFoodAsyncstorage.rejected, (state, action) => {

            })
    }
})



export default activitySlice.reducer
export const { setDailyRequiredCalories, setCaloriesConsumed, setActiveDate, setActiveMealFoodCategory, setFoodRedux, setProductInformation, setActiveData } = activitySlice.actions 