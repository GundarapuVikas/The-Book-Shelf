import {configureStore} from '@reduxjs/toolkit'

import homeBookReducer from '../features/HomePage/HomePageSlice'
import bookDetailReducer from '../features/BookDetails/BookDetailsSlice'
import titleReducer from '../features/Navbar/TitleSlice'
import cartItemsReducer from '../features/Cart/CartBag/CartSelectedBooksSlice'
import billReducer from '../features/Cart/Payment/CartBillSlice'
import myOrdersReducer from '../features/MyOrders/myOrdersSlice'
import { reducer as formReducer } from 'redux-form'
import addressReducer from '../features/Cart/Address/CartAddressSlice'

// import { createLogger } from 'redux-logger'
// const logger=createLogger()

import rootSaga from './root-sagas'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware=createSagaMiddleware();

const store=configureStore({
    reducer:{
        homeBook:homeBookReducer,
        bookItem:bookDetailReducer,
        title:titleReducer,
        cartItem:cartItemsReducer,
        cartBill:billReducer,
        myOrders:myOrdersReducer,
        form:formReducer,
        address:addressReducer,
    },
    middleware:[sagaMiddleware]
})
sagaMiddleware.run(rootSaga);

export default store
export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch