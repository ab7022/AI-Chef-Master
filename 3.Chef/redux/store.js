/* eslint-disable no-undef */
import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './reducers'
const initialState = {};



const store = configureStore({
    reducer: rootReducer, // Here, use "reducer" instead of "rootReducer"
    preloadedState: initialState,
  

    
})


export default store;