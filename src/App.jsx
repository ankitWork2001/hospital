
import './App.css'
import Foter from './component/foter/Foter'
import Navbar from './component/navbar/Navbar'
import Login from './component/pages/login/Login'
import Profile from './component/pages/profile/Profile'
import AllRoute from './component/routes/AllRoute'

function App() {

  return (
    <>
    <Navbar/>
    <AllRoute/>
    <Foter/>
    <Login/>
    <Profile/>
    </>
  )
}

export default App
