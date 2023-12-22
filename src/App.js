import { useState } from "react";
import axios from "axios";

export default function App() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [values, setValues] = useState("");

  const submitfunction = async (e) => {
    e.preventDefault();
    if (id.length === 0) {
      alert("invalid, please type id");
      return;
    }
    if (name.length === 0) {
      alert("invalid, please type name");
      return;
    }
    if (email.length === 0) {
      alert("invalid, please type email");
      return;
    }
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      console.log(data);

      setValues(data);
      console.log(values);
      alert("values are: " + data.id + ", " + data.name + ", " + data.email);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="form">
      <form onSubmit={submitfunction}>
        <label>
          USER ID
          <input
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <label>
          NAME
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          EMAIL
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <input type="checkbox" required />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
