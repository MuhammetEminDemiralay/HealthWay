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
    activeMealFoodCategory: string,
    allDataOfTheDay: DataModel[]
}

export interface DataModel {
    foodName: string,
    amount: number,
    day: Date,
    mealTime: string
}

export interface Params {
    foodName: string,
    amountState?: string
}