// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Yarn from './components/Path';
import './App.css';

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 


import ProjectsPage from './pages/ProjectsPage';

// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design:
//import TopicsPage from './pages/TopicsPage';
import HomePage from './pages/HomePage';
import TopicsPage from './pages/TopicsPage';

// If your schema requires SHORT data input, then use the TABLE design.
import EditProjectPageTable from './pages/EditProjectPageTable';
import AddProjectPageTable from './pages/AddProjectPageTable';

// Define the function that renders the content in Routes, using State.
function App() {

  const [project, setProjectToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
          <h1>
            <img src="favicon-32x32.png" alt="My Favicon"></img>
            Rawan Abdalgwad
        </h1>
            <h5>Welcome to My Web Development Portfolio</h5>
          </header>

          <Yarn />

          <main>
            <section>
                <Routes> 
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
                    
                    <Route path="/" element={<HomePage />} />

                    <Route path="/crochet" element={<ProjectsPage setProject={setProjectToEdit}/>} />
                    <Route path="/topics" element={<TopicsPage />} />
                 
                    {/* Use these if your schema requires LONG data input: */}
                    <Route path="/create" element={<AddProjectPageTable />} /> 
                    <Route path="/update" element={<EditProjectPageTable projectToEdit={project} />} />
                
                    {/* Or these if your schema requires SHORT data input: */}
  
                </Routes>
              </section>

          <footer>
            <p>&copy; 2023 Rawan Abdalgwad</p>
          </footer>
          </main>
      </BrowserRouter>
    </>
  );
}

export default App;