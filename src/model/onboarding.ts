export interface Onboarding {
    target: string[],
    reasons: string[],
    bal: {
        level: string,
        description: string,
        examples: string
    },
    genderAge: {
        gender: string,
        age: number | null
    },
    heightWeight: {
        height: number | null,
        weight: number | null,
    },
    weeklyTarget: number | null
}


export interface Bals {

    level: string,
    description: string,
    examples: string
}
