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

interface Alert {
    success: {
        isActive: boolean,
        message: string
    },
    danger: {
        isActive: boolean,
        message: string
    }
}

interface MenuState {
    sidebar: Sidebar,
    taskSidebar: TaskSidebar,
    alert: Alert
}

const initialState: MenuState = {
    sidebar: {
        isOpen: false
    },
    taskSidebar: {
        isOpen: false,
        isAdd: false
    },
    alert: {
        success: {
            isActive: false,
            message: ""
        },
        danger: {
            isActive: false,
            message: ""
        }
    }
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
        },
        onAlertSuccess: (state, action) => {
            state.alert.success.isActive = action.payload.isActive
            state.alert.success.message = action.payload.message
        }
    }
})

export default menuSlice.reducer;

export const {
    onSidebarHandler,
    onTaskSidebarHandler,
    onAlertSuccess
} = menuSlice.actions;
