import { CHARTDATA } from "./actionVars"

export const chartAction = (data)=>{
    return {
        type:CHARTDATA,
        chartData:data
    }
}