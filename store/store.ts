import {configureStore} from '@reduxjs/toolkit'
import TransactionSlice from '@/reducers/transaction-slice'

export const store = configureStore({
    reducer: {
        transaction: TransactionSlice
    }
})

export type AppDispatch = typeof store.dispatch