import {
    createSlice,
    // PayloadAction
} from '@reduxjs/toolkit'
// import type { RootState } from '../store'

interface Sidebar {
    isOpen: boolean
}

interface TaskSidebar {
    isOpen: boolean,
    isAdd: boolean
}

interface MenuState {
    sidebar: Sidebar,
    taskSidebar: TaskSidebar,
}

const initialState: MenuState = {
    sidebar: {
        isOpen: false
    },
    taskSidebar: {
        isOpen: false,
        isAdd: false
    },
}

export const menuSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        onSidebarHandler: state => {
            state.sidebar.isOpen = !state.sidebar.isOpen
        },
        onTaskSidebarHandler: (state, action) => {
            state.taskSidebar.isOpen = action.payload
        }
    }
})

export default menuSlice.reducer;

export const {
    onSidebarHandler,
    onTaskSidebarHandler,
} = menuSlice.actions;
