import { CHARTDATA } from "../actions/actionVars";

const defaultState = {
    chartData: {}
}

export const chartReducer = (state=defaultState,action)=>{
    switch(action.type){
        case CHARTDATA:
            return action.chartData
        default:
            return state    
    }
}