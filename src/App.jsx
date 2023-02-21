import "./App.css";
import { useState } from "react";
import contacts from "./contacts.json";
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function App() {
  const [firstFive, setFirstFive] = useState(contacts.slice(0, 5));
 
  return (
    <div className="App">
      <h1>Ironcontacts</h1>
      <button onClick={() => setFirstFive((firstFive) => [...firstFive, contacts[getRandomInt(5, contacts.length)]])}>
          Add Randon Contact
        </button>
      <table id="table">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
         </tr>
        </thead>
        <tbody>
        {firstFive.map((x) => (
          <tr key={x.id}>
            <td>
              <img src={x.pictureUrl} alt="pic" />
            </td>
            <td>{x.name}</td>
            <td>{Math.round(x.popularity * 100) / 100}</td>
            <td>{x.wonOscar ? '🏆' : ''}</td>
            <td>{x.wonEmmy ? '🏆' : ''}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;