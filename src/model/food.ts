
export interface Nutrient {
    value?: number;
    unit?: string;
}

export interface FoodItem {
    foodName: string;
    measure: string;
    weight?: Nutrient;
    energy: Nutrient;
    energyKJ?: Nutrient;
    protein?: Nutrient;
    carbohydrate?: Nutrient;
    totalSugar?: Nutrient;
    totalDietaryFibre?: Nutrient;
    totalFat?: Nutrient;
    saturatedFat?: Nutrient;
    cholesterol?: Nutrient;
    calcium?: Nutrient;
    iron?: Nutrient;
    sodium?: Nutrient;
    potassium?: Nutrient;
    magnesium?: Nutrient;
    phosphorus?: Nutrient;
    vitaminA?: Nutrient;
    vitaminC?: Nutrient;
    vitaminB12?: Nutrient;
    folate?: Nutrient;
    thiamin?: Nutrient;
    niacin?: Nutrient;
    lycopene?: Nutrient;
    betaCarotene?: Nutrient;
    vitaminD?: Nutrient;
    caffeine?: Nutrient;
    dha?: Nutrient;
    epa?: Nutrient;
    transFat?: Nutrient;
    monounsaturatedFat?: Nutrient;
    polyunsaturatedFat?: Nutrient;
    vitaminE?: Nutrient;
    alcohol?: Nutrient;
    riboflavin?: Nutrient;
    category?: string;
    subCategory?: string;
}