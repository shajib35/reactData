import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>CRUD APPLICATION</h1>
<div className="form"  >
  <lable>Movie Name :</lable>
    <input type="text" name="movieName"/>
    <label>Review:</label>
    <input type="text" name="review"/>
    <button>Submit</button>
    </div>
    </div>
  );
}

export default App;
