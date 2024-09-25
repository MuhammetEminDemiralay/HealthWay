import { FoodItem } from "./food"

export interface Content {
    foodName?: string
    amount: number,
    day: Date,
    mealTime: string,
    exercise?: Exercise[] | null
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
    activeData?: DataModel | null,
    activeMealFoodCategory: string,
    allDailyData: DataModel[],
    productInformation: FoodItem[],
    exercise?: Exercise[]
}

export interface DataModel {
    data: Content[],
    date?: Date
    exercise?: Exercise[],
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