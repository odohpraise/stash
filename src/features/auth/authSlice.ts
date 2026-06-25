import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface User {
    email: string;
    password: string;
}

interface AuthState {
    users: User[];
    currentUser: User | null;
    isAuthenticated: boolean;
}

// Load saved data from localStorage
const storedUsers = localStorage.getItem("users");
const storedUser = localStorage.getItem("currentUser");

const initialState: AuthState = {
    users: storedUsers ? JSON.parse(storedUsers) : [],
    currentUser: storedUser ? JSON.parse(storedUser) : null,
    isAuthenticated: storedUser ? true : false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        register: (state, action: PayloadAction<User>) => {
            const exists = state.users.find(
                (u) => u.email === action.payload.email
            );
            if (!exists) {
                state.users.push(action.payload);
                localStorage.setItem("users", JSON.stringify(state.users));
            } else {
                alert("User already exists");
            }
        },

        login: (state, action: PayloadAction<User>) => {
            const user = state.users.find(
                (u) =>
                    u.email === action.payload.email &&
                    u.password === action.payload.password
            );
            if (user) {
                state.currentUser = user;
                state.isAuthenticated = true;
                localStorage.setItem("currentUser", JSON.stringify(user));
            } else {
                alert("Invalid credentials");
            }
        },

        logout: (state) => {
            state.currentUser = null;
            state.isAuthenticated = false;
            localStorage.removeItem("currentUser");
        },
    },
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;