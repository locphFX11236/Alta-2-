import { datasProps, actionProps } from './ActionCreators';
import * as ActionTypes from './ActionTypes';

const initialState: datasProps = []; // Khởi tạo state ban đầu

export const DataReducer = (state = initialState , action: actionProps) => {
    switch (action.type) { // Xử lý các hành vi
        case (ActionTypes.ADD_DATAS):
            let datas = action.payload;
            return state = datas ;

        default: return state;
    }
}; 