
import './App.css'
import Foter from './component/foter/Foter'
import Navbar from './component/navbar/Navbar'
import AllRoute from './component/routes/AllRoute'

function App() {

  return (
    <>
    <Navbar/>
     <div className='sticky top-110 flex justify-end z-50 '>
      <a title='How can i help you' target='_blank' href="https://wa.me/917206783874">
      <img className=' bg-green-500 rounded-full p-2 w-15 me-2.5 cursor-pointer animate-bounce' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1022px-WhatsApp.svg.png" alt="" /></a>
     
      </div>
    <AllRoute/>
    <Foter/>
    </>
  )
}

export default App
