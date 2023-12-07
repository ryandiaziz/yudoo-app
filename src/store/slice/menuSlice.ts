import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface MenuState {
    isSidebarOpen: boolean
}

const initialState: MenuState = {
    isSidebarOpen: true
}

export const menuSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        onSidebarHandler: state => {
            state.isSidebarOpen = !state.isSidebarOpen
        },
    }
})

export const { onSidebarHandler } = menuSlice.actions

export default menuSlice.reducer