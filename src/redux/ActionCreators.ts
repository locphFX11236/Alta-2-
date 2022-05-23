import { Dispatch } from 'redux';

import { dataPending } from '../firebaseConsole/firebase';
import * as ActionTypes from './ActionTypes';

export type docProps = {
    id: String
};

export type datasProps = Array<docProps | null>

export type actionProps = {
    type: String,
    payload: datasProps
}

export const addDatas = (datas: datasProps): actionProps => ({
    type: ActionTypes.ADD_DATAS,
    payload: datas
}) // Object quy định reducer xử lý action

export const getDatas = () => 
    async (dispatch: Dispatch) => { // Hành vi dispatch quy định bởi redux-thunk bắt lấy các hành động để reducer thực hiện
        return await dataPending()
            .then(datas => {
                return datas
            })
            .then(datas => {
                return dispatch( addDatas(datas) ) // Gửi kết quả lấy được đến action addDatas
            })
            .catch( err => console.log(err) )
        ;
    } // Action getDatas lấy data từ Promise async/wait
;