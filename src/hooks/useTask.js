
import { useEffect, useState } from "react";
import {getTask} from '../api/unison-server-api'

const useTask = id => {
    const [task, setTask] = useState(null);
    useEffect(() => {
      getTask(id).then(task => {
        setTask(task);
      });
    }, [id]);
    return [task, setTask];
  };
  
  export default useTask

