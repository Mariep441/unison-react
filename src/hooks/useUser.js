
import { useEffect, useState } from "react";
import {getUser} from '../api/unison-server-api'

const useUser = _id => {
    const [user, setUser] = useState(null);
    useEffect(() => {
      getUser(_id).then(user => {
        setUser(user);
      });
    }, [_id]);
    return [user, setUser];
  };
  
  export default useUser