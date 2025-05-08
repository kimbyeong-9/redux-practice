import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducer/reducer'



let store = configureStore({reducer})


export default store;