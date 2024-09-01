import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import onboardingSlice from "./onboardingSlice";



const store = configureStore({
    reducer: {
        auth: authSlice,
        onboarding: onboardingSlice
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })

})

export default store