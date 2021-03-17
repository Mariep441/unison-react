
import { useEffect, useState } from "react";
import {getTask} from '../api/unison-server-api'

const useTask = _id => {
    const [task, setTask] = useState(null);
    useEffect(() => {
      getTask(_id).then(task => {
        setTask(task);
      });
    }, [_id]);
    return [task, setTask];
  };
  
  export default useTask

