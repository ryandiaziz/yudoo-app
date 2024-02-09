import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL: string = "https://65b5fd69da3a3c16ab0017fd.mockapi.io/api/v1/task"

interface Task {
    id: string,
    name: string,
    desc: string,
    category: string,
    isDone: boolean,
    createdAt: string,
    updatedAt: string
}

interface TaskState {
    todays: Task[]
}

const initialState: TaskState = {
    todays: []
}


export const fetchTodayTask = createAsyncThunk(
    'task/today',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (_data: any, thunkAPI) => {
        try {
            const response = await axios({
                method: "get",
                url: URL
            })

            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue("failed")
        }
    }
)

export const task = createSlice({
    name: "task",
    initialState,
    reducers: undefined,
    extraReducers(builder) {
        builder.addCase(fetchTodayTask.fulfilled, (state, action) => {
            state.todays = action.payload;
        });
    },
})


export default task.reducer;