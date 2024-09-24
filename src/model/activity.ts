import { FoodItem } from "./food"

export interface Content {
    foodName: string,
    amount: number,
    day: Date,
    mealTime: string
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
}

export interface Params {
    foodName: string,
    amountState?: string
}

export interface Exercise {
    exerciseName: string,
    time: number,
    options: ExerciseOptions[],
    description: string
}

export interface ExerciseOptions {
    name: string,
    calorie: number
}