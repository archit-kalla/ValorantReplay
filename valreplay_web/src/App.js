import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Test from './pages/test';
import Test2 from './pages/test2';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/create" element={<Test2 />} />
        </Routes>
      </Router>
      <footer> &copy; 2021 ValReplay </footer>
      <p> Made by ohmygodarchie</p>
      

    </div>
  );
}

export default App;
