import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import onboardingSlice from "./onboardingSlice";
import userSlice from "./userSlice";
import activitySlice from "./activitySlice";



const store = configureStore({
    reducer: {
        auth: authSlice,
        onboarding: onboardingSlice,
        user : userSlice,
        activity : activitySlice
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })

})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store