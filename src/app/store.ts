import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import resourceReducer from "../features/resources/resourceSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        resources: resourceReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>
