import React from "react";
import { TaskGantt } from "./Gantt";

const TaskGanttCard = ({task}) => {

  return (
    <TaskGantt
        name={task.name}
        description={task.description}
        process={task.process}
        startDate={task.startDate}
        deadline={task.deadline}
        estimatedTimeToComplete={task.estimatedTimeToComplete}
        percentageOfCompletion={task.percentageOfCompletion}
        dependencies={task.dependencies}
      />

  );
};

export default TaskGanttCard ;