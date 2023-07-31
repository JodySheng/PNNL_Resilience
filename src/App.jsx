import { useState } from 'react';
import './App.css';
import Home from './Home/Home';
import ProjectIntro from './ProjectIntro/ProjectIntro';
import Visualization from './Visualization/Visualization';
import Nav from './Nav';

function App() {
  const [page, setPage] = useState('Home');

  return (
  <div className="page">
    <Nav page={page} setPage={setPage}/>
    { page === 'Home' && <Home/> }
    { page === 'ProjectIntro' && <ProjectIntro/> }
    { page === 'Visualization' && <Visualization/> }
  </div>
  );
}

export default App;
