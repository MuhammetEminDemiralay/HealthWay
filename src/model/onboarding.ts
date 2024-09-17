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
        age: number
    },
    heightWeight: {
        height: number,
        weight: number,
    },
    weeklyTarget: number,
    updateStatus?: boolean
}


export interface Bals {

    level: string,
    description: string,
    examples: string
}
