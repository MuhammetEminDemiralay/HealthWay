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
    allDataOfTheDay: DataModel[],
    productInformation: FoodItem[]
}

export interface DataModel {
    data: Content[],
    date?: Date
}

export interface Params {
    foodName: string,
    amountState?: string
}