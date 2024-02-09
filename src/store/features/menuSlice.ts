import {
    createSlice,
    // PayloadAction
} from '@reduxjs/toolkit'
// import type { RootState } from '../store'

interface MenuState {
    isSidebarOpen: boolean,
    isTaskSidebarOpen: boolean,
}

const initialState: MenuState = {
    isSidebarOpen: true,
    isTaskSidebarOpen: false,
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

export default menuSlice.reducer;

export const {
    onSidebarHandler,
    onTaskSidebarHandler,
} = menuSlice.actions;
