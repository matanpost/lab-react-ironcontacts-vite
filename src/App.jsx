import "./App.css";
import { useState } from "react";
import contacts from "./contacts.json";

function App() {
  const [firstFive, setFirstFive] = useState(contacts.slice(0, 5));
  console.log(firstFive);
  return (
    <div className="App">
      <h1>Ironcontacts</h1>
      <table id="table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
         </tr>
        </thead>
        <tbody>
        {firstFive.map((x) => (
          <tr>
            <td>
              <img src={x.pictureUrl} alt="pic" />
            </td>
            <td>{x.name}</td>
            <td>{Math.round(x.popularity * 100) / 100}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;