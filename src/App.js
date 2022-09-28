import Home from "./components/Home";
import Grateful from "./components/Grateful";
import JustOkay from "./components/JustOkay";
import CouldBeBetter from "./components/CouldBeBetter";
import NotMyBest from "./components/NotMyBest";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/grateful" element={<Grateful/>} />
            <Route path="/justContent" element={<JustOkay />} />
            <Route path="/couldBeBetter" element={<CouldBeBetter/>} />
            <Route path="/notMyBest" element={<NotMyBest/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
