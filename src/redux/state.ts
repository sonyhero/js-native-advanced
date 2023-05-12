import { combineReducers, legacy_createStore as createStore } from "redux";
import { currencyReducer } from './currencyReducer';

const rootReducer = combineReducers({
    currency: currencyReducer,
});
export type RootStateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);