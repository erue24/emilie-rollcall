
import './App.css';




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
        present: false
      }
    ]
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <h1>Rollcall App</h1>

    </div>
  );
}


export default App;
