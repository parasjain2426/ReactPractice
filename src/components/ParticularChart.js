import React from 'react';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import { useParams } from 'react-router-dom';

const ParticularChart = ({data})=>{
    let { topicId } = useParams();
    // const [graph,setGraph] = useState(React.createElement(`${topicId}`));
    if(topicId==='Bar'){
        return(
            <Bar data={data}/>
        )
    }
    else if(topicId==='Pie'){
        return(
            <Pie data={data}/>
        )
    }
    else if(topicId==='Line'){
        return(
            <Line data={data}/>
        )
    }
    return (
        <Doughnut data={data}/>
    )
}

export default ParticularChart;