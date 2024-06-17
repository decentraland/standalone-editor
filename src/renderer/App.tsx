import { useEffect } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

function Hello() {
  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    window.workspace
      .getWorkspace('testing')
      .then((workspace) => {
        console.log(workspace);
        return 1;
      })
      .catch(() => {});
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
