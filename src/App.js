import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ContentCatalogue from './components/ContentCatalogue';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Signup />} />
        <Route path="/ContentCatalogue" element={<ContentCatalogue />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
