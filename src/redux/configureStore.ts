import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import { DataReducer } from './reducer';
import thunk from 'redux-thunk';

const store = createStore(
    combineReducers({
        db: DataReducer
    }),
    applyMiddleware(thunk)
);

export const ConfigureStore = () => {
    return store;
}; // Cấu hình store redux
