import { ActionTypes } from "../constants/action-types";

const initialState = {
    employees:[]
};

export const employeesReducer = (state = initialState,{type,payload})=>{
    switch(type){
        case ActionTypes.SET_EMPLOYEES:
            return {...state, employees :  payload}
        default: 
        return state
    }
};