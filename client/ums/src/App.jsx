import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './components/ums/pages/login.css';
import Login from "./Components/ums/pages/login";

import 'bootstrap/dist/css/bootstrap.min.css';

import Admin from './Components/ums/Admin/Admin';
import './Components/ums/Admin/Admin.css'
import Employe from './Components/ums/Employee/Employe';
import './Components/ums/Employee/Employe.css'

function App() {

  return (
    <>
     <Router>
        <Routes>
          <Route path={'/'} exact element={<Login />} />
          <Route path={'/Login'} exact element={<Login />} />
          <Route path={'/Admin'} exact element={<Admin />} />
          <Route path={'/Employe'} exact element={<Employe />} />

        </Routes>
      </Router>

    </>
  )
}

export default App
