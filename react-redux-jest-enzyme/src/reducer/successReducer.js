import {types} from "../action/types"

export const successReducer = (state=[], action) =>{
    switch(action.type){
        case  types.GET_POST:
        return action.payload
        default:
        return state;
    }
}