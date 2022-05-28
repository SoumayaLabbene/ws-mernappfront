import ContactList from './Components/ContactList'
import NavBar from './Components/Navbar'
import AddContact from './Components/AddContact'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/allcontacts" element={<ContactList />} />
        <Route path="/add" element={<AddContact />} />
      </Routes>
    </div>
  )
}

export default App
