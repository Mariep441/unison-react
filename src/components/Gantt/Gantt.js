import React, {useState } from "react";
import Chart from "react-google-charts";


function daysToMilliseconds(days) {
  return days * 24 * 60 * 60 * 1000;
}

export const TaskGantt =  (props) => {
  
  const [setChartImageURI] = useState("");
    
  const columns = [
    { type: "string", label: "Task ID" },
    { type: "string", label: "Task Name" },
    { type: "string", label: "Resource" },
    { type: "date", label: "Start Date" },
    { type: "date", label: "End Date" },
    { type: "number", label: "Duration" },
    { type: "number", label: "Percent Complete" },
    { type: "string", label: "Dependencies" }
  ];

  const rows = ([
    [
    props.name, 
    props.description, 
    props.process.name, 
    new Date(props.startDate),
    new Date(props.deadline), 
    props.estimatedTimeToComplete, 
    props.percentageOfCompletion, 
    props.dependencies
    ]
  ]);



    return (

      <div className="App">
      <Chart
          chartType="Gantt"
          data={[columns, ...rows]}
          width="100%"
          height="50%"
          legendToggle
        />
        <div>
          <img src={setChartImageURI} />
        </div>
      </div>
    );
  };


export default TaskGantt ;