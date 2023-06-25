import axios, { CanceledError } from "axios";
import React, { useState, useEffect } from "react";

const App = () => {
  const [user, SetUser] = useState([]);
  const [error, SetError] = useState("");
  const [loading, SetLoading] = useState(false);

  useEffect(function () {
    const controller = new AbortController();
    SetLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/albums", {
        signal: controller.signal,
      })
      .then((res) => {
        console.log(res.data);
        SetUser(res.data);
        SetLoading(false);
      })
      .catch((err) => {
        {
          if (err instanceof CanceledError) return;
          SetError(err.message);
          SetLoading(false);
        }
      });
    return () => controller.abort();
  }, []);

  const deleteUser = (id) => {
    const original = [...user];
    SetUser(user.filter((e) => e.id !== id));
    axios
      .delete("https://jsonplaceholder.typicode.com/asdasdalbums/" + id)
      .catch((err) => {
        SetError(err.message);
        SetUser(original);
      });
  };

  return (
    <div>
      {loading && (
        <div>
          <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      )}
      {error && <p className="text-danger">{error}</p>}

      <ul>
        {user.map((user) => (
          <li key={user.id} className="d-flex justify-content-between m-2">
            {user.title}
            <button
              className="btn btn-outline-danger"
              onClick={() => {
                deleteUser(user.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
