import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Resource {
    id: string;
    title: string;
    url: string;
    note: string;
    category: string;
}
interface ResourceState {
    items: Resource[]
}

// Loads saved Resources from Local storage
const stored = localStorage.getItem("resources")

const initialState: ResourceState = {
    items: stored ? JSON.parse(stored) : []
}
const resourceSlice = createSlice({
    name: "resources",
    initialState,
    reducers: {
        addResource: (state, action: PayloadAction<Resource>) => {
            state.items.push(action.payload)
            localStorage.setItem("resources", JSON.stringify(state.items))
        },
        deleteResource: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter((u) => u.id !== action.payload); localStorage.setItem("resources", JSON.stringify(state.items))
        },
        editResource: (state, action: PayloadAction<Resource>) => {
            const index = state.items.findIndex((r) => r.id === action.payload.id)

            if (index !== -1) {
                state.items[index] = action.payload;
                localStorage.setItem("resources", JSON.stringify(state.items));
            }
        }
    }
})

export const { addResource, deleteResource, editResource } = resourceSlice.actions;

export default resourceSlice.reducer;