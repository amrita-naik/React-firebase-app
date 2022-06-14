import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from './components/layout/Navbar'
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
            <Route element={<Dashboard/>} path='/'/>
            <Route element={<ProjectDetails/>} path='/project/:id'/>
            <Route element={<SignIn/>} path='/signin'/>
            <Route element={<SignUp/>} path='/signup'/>
            <Route element={<CreateProject/>} path='/create'/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

