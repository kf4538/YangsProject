import Home from '../pages/Home';
import Survey from '../pages/Survey';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/survey" element={<Survey />} />
        </Routes>
    </Router>
  );
}

export default App;
