import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<Detail />} />
                <Route path="/hello" element={<h1>Hello</h1>} />
            </Routes>
        </Router>
    );
}

export default App;
