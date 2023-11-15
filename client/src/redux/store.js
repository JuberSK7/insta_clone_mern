import {configureStore} from '@reduxjs/toolkit'
import userSlice from './features/auth/userSlice'
import postSlice from './features/post/postSlice'
import suggestSlice from './features/suggest/suggestSlice'


 const store = configureStore({
    reducer:{user:userSlice, post:postSlice, suggest:suggestSlice}
})

export default store