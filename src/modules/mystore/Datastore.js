import { configureStore } from '@reduxjs/toolkit'
import myactionslist from './Myreduxfunc';
export const mydatastore = configureStore({
    reducer: {
        counter:myactionslist
    },
  })