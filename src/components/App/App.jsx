import { useState } from 'react';
import './App.css';

function App() {
  const [creatureList, setCreatureList] = useState([
    { id: 1, name: 'Unicorn', origin: 'Britain' },
    { id: 2, name: 'Sphinx', origin: 'Egypt' },
    { id: 3, name: 'Jackalope', origin: 'America' }
  ])

  return (
    <>
      <header className="Header">
        <h1>React Mythical Creatures</h1>
      </header>
      <div className="App">
        <div>
          <h3>Splatting to the DOM looks like this (ugly!):</h3>
          <pre>
{/* We can use JSON.stringify() to dump raw data into our DOM */}
            {JSON.stringify(creatureList)}
          </pre>
{/* this is the syntax used for getting objects of arrays onto the DOM  */}
          <h3>This does NOT use .map() (no looping!):</h3>
          <p>{creatureList[0].name} is from {creatureList[0].origin}</p>
          
{/* .map() is used to loop through the objects of an array */}
{/* in order to work in a database, objects must have unique IDs to be identified effectively */}
<h3>This DOES use .map() (looping!):</h3>
          {creatureList.map((creature) => {
            return (
              <p key={creature.id}>{creature.name} is from {creature.origin}</p>
            )
          })}
        </div>
      </div>
    </>
  );
}

export default App;
