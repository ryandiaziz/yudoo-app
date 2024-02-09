import { configureStore } from '@reduxjs/toolkit'
import MenuReducer from './features/menuSlice'
import taskSlice from './features/taskSlice'

export const store = configureStore({
    reducer: {
        menu: MenuReducer,
        task: taskSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch