import { connect } from "react-redux"
import { chartAction } from "../actions/actionFuncs"
import ChartPrac from "../components/ChartPrac"

const mapStateToProps = (state)=>({
    chartData: state
})

const mapDispatchToProps = (dispatch)=>({
        showChart: (data)=>dispatch(chartAction(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(ChartPrac);