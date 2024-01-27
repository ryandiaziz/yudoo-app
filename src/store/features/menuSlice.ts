import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface MenuState {
    isSidebarOpen: boolean,
    isTaskSidebarOpen: boolean,
}

const initialState: MenuState = {
    isSidebarOpen: true,
    isTaskSidebarOpen: true,
}

export const menuSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        onSidebarHandler: state => {
            state.isSidebarOpen = !state.isSidebarOpen
        },
        onTaskSidebarHandler: (state, action) => {
            state.isTaskSidebarOpen = action.payload
        }
    }
})

export const {
    onSidebarHandler,
    onTaskSidebarHandler,
} = menuSlice.actions

export default menuSlice.reducer