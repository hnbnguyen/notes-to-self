import Home from "./pages/Home";
import Create from "./pages/Create";
import Read from "./pages/Read";
import AllItems from "./pages/AllItems";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/create" element={<Create />} />
            <Route path="/read" element={<Read />} />
            <Route path="/allItems" element={<AllItems />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
