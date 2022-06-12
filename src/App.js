import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from './components/layout/Navbar'
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
            <Route element={<Dashboard/>} path='/'/>
            <Route element={<ProjectDetails/>} path='/project/:id'/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

