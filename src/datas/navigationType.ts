import { NativeStackNavigationProp } from "@react-navigation/native-stack"


export type NavigationType = {
    home: undefined,
    food: { value: string },
    exercise?: { value: string },
    step?: { value: string },
    water?: { value: string },
    notes?: { value: string }
}

export type NavigationProps = NativeStackNavigationProp<NavigationType>;

