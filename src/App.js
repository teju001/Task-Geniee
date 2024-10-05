import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PopularProjects from './components/PopularProjects';
import ProjectDetail from './components/ProjectDetail'; 
import AllProjects from './components/AllProjects'; // Import the AllProjects component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<PopularProjects />} />
          <Route path="/projectsall" element={<AllProjects />} /> {/* Add this line */}
          <Route path="/projects/:projectId" element={<ProjectDetail />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
