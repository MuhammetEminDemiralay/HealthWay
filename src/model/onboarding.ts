export interface Onboarding {
    target: string[],
    reasons: string[],
    bal: string,
    genderAge: {
        gender: number | null,
        age: number | null
    },
    heightWeight: {
        height: number | null,
        weight: number | null,
    },
    weeklyTarget: number | null
}

