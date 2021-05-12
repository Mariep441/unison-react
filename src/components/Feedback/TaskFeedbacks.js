import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTaskFeedbacks } from "../../api/unison-server-api";
import { excerpt } from "../../utils/excerpt";

export default ({ task }) => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    getTaskFeedbacks(task._id).then(feedbacks => {
      setFeedbacks(feedbacks);
    });
  }, []);

  
  
  return (
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Difficulty</th>
          <th scope="col">Comment</th>
          <th scope="col">More</th>
        </tr>
      </thead>
      <tbody>
        {feedbacks.map(f => {
            return (
              <tr key={f._id}>
                <td>{f.difficulty}</td>
                <td>{excerpt(f.comment)}</td>
                <td>
                  {" "}
                  <Link
                    to={{
                      pathname: `/feedbacks/${f._id}`,
                      state: {feedback: f, task: task}
                    }}
                  >
                    Full Feedback
                  </Link>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};