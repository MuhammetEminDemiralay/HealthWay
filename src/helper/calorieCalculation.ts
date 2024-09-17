import { Onboarding } from "../model/onboarding"

interface Food {
    protein: number;
    carbohydrate: number;
    fat: number;
}

export const bmr = (profile: Onboarding) => {
    if (profile.genderAge.gender == "male") {
        return ((10 * profile.heightWeight.weight) + (6.25 * profile.heightWeight.height) - (5 * profile.genderAge.age) + 5)
    } else {
        return ((10 * profile.heightWeight.weight) + (6.25 * profile.heightWeight.height) - (5 * profile.genderAge.age) - 161)
    }
}

export const calorieCalculation = (profile: Onboarding, bmr: number) => {

    const muscleStatus = profile.target.find(item => item == "Gain muscle")

    const stayTheSameWeight = { protein: 0.25, carbohydrate: 0.5, fat: 0.25 }
    const stayTheSameWeightMuscle = { protein: 0.3, carbohydrate: 0.45, fat: 0.25 }
    const loseWeight = { protein: 0.3, carbohydrate: 0.4, fat: 0.3 }
    const loseWeightMuscle = { protein: 0.3, carbohydrate: 0.4, fat: 0.3 }
    const gainWeight = { protein: 0.2, carbohydrate: 0.6, fat: 0.2 }
    const gainWeightMuscle = { protein: 0.3, carbohydrate: 0.5, fat: 0.2 }

    if (profile.bal.level == "Not very active") {
        return computation(profile, muscleStatus, stayTheSameWeight, stayTheSameWeightMuscle, loseWeight, loseWeightMuscle, gainWeight, gainWeightMuscle, bmr, 1.2)
    } else if (profile.bal.level == "Lightly Active") {
        return computation(profile, muscleStatus, stayTheSameWeight, stayTheSameWeightMuscle, loseWeight, loseWeightMuscle, gainWeight, gainWeightMuscle, bmr, 1.35)

    } else if (profile.bal.level == "Moderately Active") {
        return computation(profile, muscleStatus, stayTheSameWeight, stayTheSameWeightMuscle, loseWeight, loseWeightMuscle, gainWeight, gainWeightMuscle, bmr, 1.55)

    } else if (profile.bal.level == "Active") {
        return computation(profile, muscleStatus, stayTheSameWeight, stayTheSameWeightMuscle, loseWeight, loseWeightMuscle, gainWeight, gainWeightMuscle, bmr, 1.725)

    } else if (profile.bal.level == "Very Active") {
        return computation(profile, muscleStatus, stayTheSameWeight, stayTheSameWeightMuscle, loseWeight, loseWeightMuscle, gainWeight, gainWeightMuscle, bmr, 1.9)
    }
}


const computation = (
    profile: Onboarding,
    muscleStatus: string | undefined,
    stayTheSameWeight: Food,
    stayTheSameWeightMuscle: Food,
    loseWeight: Food,
    loseWeightMuscle: Food,
    gainWeight: Food,
    gainWeightMuscle: Food,
    bmr: number,
    factor: number,

) => {
    if (profile.target.find(item => item == "Lose weight")) {
        return {
            calorie: (bmr * factor) - (profile.weeklyTarget * 1000),
            percentage: muscleStatus != undefined ? loseWeightMuscle : loseWeight
        }
    } else if (profile.target.find(item => item == "Stay the same weight")) {
        return {
            calorie: (bmr * factor),
            percentage: muscleStatus != undefined ? stayTheSameWeightMuscle : stayTheSameWeight
        }
    } else if (profile.target.find(item => item == "Gain weight")) {
        return {
            calorie: (bmr * factor) + (profile.weeklyTarget * 1000),
            percentage: muscleStatus != undefined ? gainWeightMuscle : gainWeight
        }
    }
}