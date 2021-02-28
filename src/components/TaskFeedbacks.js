import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTaskFeedbacks } from "../api/unison-server-api";
import { excerpt } from "../utils/excerpt";

export default ({ task }) => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    getTaskFeedbacks(task.id).then(feedbacks => {
      setFeedbacks(feedbacks);
    });
  }, []);
  return (
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Author</th>
          <th scope="col">Excerpt</th>
          <th scope="col">More</th>
        </tr>
      </thead>
      <tbody>
        {feedbacks.map(f => {
            return (
              <tr key={f.id}>
                <td>{f.author}</td>
                <td>{excerpt(f.content)}</td>
                <td>
                  {" "}
                  <Link
                    to={{
                      pathname: `/feedbacks/${f.id}`,
                      state: {
                        feedback: f,
                        task: task
                      }
                    }}
                  >
                    Full Review
                  </Link>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};