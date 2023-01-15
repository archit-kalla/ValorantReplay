import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Main from './pages/Main';
import Test2 from './pages/test2';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/create" element={<Test2 />} />
        </Routes>
      </Router>
      <footer> &copy; 2023 ValReplay </footer>
      <p>Not Affiliated with Riot Games</p>
      <p>Made by ohmygodarchie</p>
      

    </div>
  );
}

export default App;
