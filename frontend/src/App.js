import Home from "./components/Home";
import Create from "./components/Create";
import Read from "./components/Read";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/create" element={<Create />} />
            <Route path="/read" element={<Read />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
