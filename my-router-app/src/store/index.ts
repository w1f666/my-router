import {configureStore} from '@reduxjs/toolkit';
import billReducer from './module/BillStore';
const store = configureStore({
    reducer: {
        bill: billReducer
    }
})
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;