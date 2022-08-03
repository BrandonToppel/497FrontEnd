import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom';
import Nav from './components/Nav';
import Login from './components/Login'
import Register from './components/Register';
import MovieDetails from './components/MovieDetails';
import Frontpage from './components/frontpage';


function App() {
  return (
    <div className="App">
      <Router>
      <Nav/>
        <Routes>
          <Route path='/' element={<Frontpage />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/movie/:name' element={<MovieDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
