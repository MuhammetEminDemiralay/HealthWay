import { FoodItem } from "./food"

export interface Content {
    foodName?: string
    amount: number,
    day: Date,
    mealTime: string,
}

export interface DailyCalorie {
    dailyRequiredCalories: {
        calorie: number | null,
        percentage: {
            carbohydrate: number | null,
            fat: number | null,
            protein: number | null
        }
    },
    foodsConsumed: Content[]
    activeDate: Date,
    activeData?: FoodDataModel | null,
    activeMealFoodCategory: string,
    allDailyFoodData: FoodDataModel[],
    allDailyExerciseData: ExerciseDataModel[]
    productInformation: FoodItem[],
    exercise?: Exercise[]
}

export interface DataModel {
    data?: Content[],
    date: Date
    exercise?: Exercise[],
}

export interface FoodDataModel {
    data: Content[],
    date: Date
}

export interface ExerciseDataModel {
    exercise: ExerciseParams[],
    date: Date
}

export interface Params {
    food?: FoodParams,
    exercise?: ExerciseParams,
    subject: string
}

export interface FoodParams {
    foodName: string | undefined,
    amountState?: string
}

export interface ExerciseParams {
    exerciseName: string | undefined,
    time?: number | undefined,
    options?: string | undefined,
}

export interface Exercise {
    exerciseName: string | undefined,
    time?: number | undefined,
    options?: ExerciseOptions[] | undefined,
    description?: string
}

export interface ExerciseOptions {
    optionName: string,
    calorie?: number
}