import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import SessionList from './components/SessionList';
import Session from './components/Session';

/* NOTES:
> We are creating a REACT state variable. We use them because the REACT framework will keep an eye on them. Anytime they change, the REACT framework will change all the pages that use this variable 
> to use a REACT state variable, we use the useState HOOK  
> a hook is just a function. UseState is a hook. When you call it, React will automatically import it.

*/



// Creating an array for all the dummy Data aka the names 
//Create all the elements as JS objects 
const defualtClassList = [
  {
    id: 1,
    fName: "Angelica",
    present: false
  },
  {
    id: 2,
    fName: "John",
    present: false
  },
  {
    id: 3,
    fName: "Gabe",
    present: false
  },
  {
    id: 4,
    fName: "Emilie",
    present: false
  }
];

// Creating an array for all the dummy Data. This data is sessions that has a name, date, start and end time 
//Create all the elements as JS objects 
const defaultSession = [
  {
    id: 1, name: "WDF Practical",
    date: "02/01/2022",
    sTime: "14:00",
    eTime: "15:00",
    rollcall: [
      {
        id: 1,
        fName: "Angelica",
        present: false
      },
      {
        id: 2,
        fName: "John",
        present: true
      },
      {
        id: 3,
        fName: "Gabe",
        present: false
      },
      {
        id: 4,
        fName: "Emilie",
        present: false
      }
    ]
  },
  {
    id: 2, name: "Design 101",
    date: "05/02/2022",
    sTime: "10:00",
    eTime: "12:00",
    rollcall: [
      {
        id: 1,
        fName: "Angelica",
        present: false
      },
      {
        id: 2,
        fName: "John",
        present: false
      },
      {
        id: 3,
        fName: "Gabe",
        present: false
      },
      {
        id: 4,
        fName: "Emilie",
        present: true
      }
    ]
  }
];

function App() {
  /*
   The thing in the [] is [what you want to call the array, function you can call anytime you want to set this variable]
   */
  const [rollCallSessions, setRollCallSessions] = useState(defaultSession);

  //Create sessionID and newName as variables that you're going to store data into
  const updateSessionName = (sessionID, newName) => {
    //pass the find function the particular item that you're passing into it
    //NOTE: GOOGLE HOW FIND FUNCTIONS WORK. FIND FUNCTIONS ARE JS NOT REACT 
    //NOTE: GET COMFORTABLE WITH MAP AND FIND FUNCTIONS OF AN ARRAY 
    const theSessionToUpdate = rollCallSessions.find((item) => (item.id === sessionID));
    theSessionToUpdate.name = newName;
    setRollCallSessions(rollCallSessions);
  }

  return (
    <div className="App">
      {/* Download the router package by typing npm install react-router-dom@latest */}
      {/* Routers have Routes. Routes have a route */}
      {/* For every link you have, you need a route that matches it. Every route also needs an element that it displays */}
      <Router>
        <header className="App-header"></header>
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <h1>Rollcall App</h1>
        <div className="container">
          <Routes>
            <Route path="/" element={
              // creating a component and passing it a prop. The name of the prop is the one that was set in the hook
              < SessionList sessions={rollCallSessions} />}
            />
            <Route path="/about" element={<p>Made with love by Emilie</p>}
            />
            {/* THIS ROUTE IS THE ONE IN THE SESSIONLIST COMPONENT  */}
            {/* :sid is a parameter id that stands for session ID (we made that name up) */}
            <Route path="/session/:sid" element={<Session sessions={rollCallSessions} changeName={updateSessionName} />}
            // ^ Here, you're passing the /sessions all the sessions components with a prop called sessions
            />
          </Routes>
        </div>
      </Router>





    </div>
  );
}


export default App;
