
import './App.css'
import Foter from './component/foter/Foter'
import Navbar from './component/navbar/Navbar'
import AllRoute from './component/routes/AllRoute'

function App() {

  return (
    <>
    <Navbar/>
     <div className='fixed bottom-5 right-5 z-50 flex justify-end gap-2 icondiv'>
      <p className='bg-green-500 text-white p-2 h-10 rounded font-semibold helptext'>How can i help you</p>
      <a  target='_blank' href="https://wa.me/917206783874">
      <img className=' bg-green-500 rounded-full p-2 w-14 h-14 cursor-pointer animate-bounce shadow-lg ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1022px-WhatsApp.svg.png" alt="" /></a>
     
      </div>
    <AllRoute/>
    <Foter/>
    </>
  )
}

export default App
