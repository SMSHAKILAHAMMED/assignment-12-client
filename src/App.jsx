import 'react-toastify/dist/ReactToastify.css';
import Navber from './Components/Navber/Navber'
import Footer from './Components/Footer/Footer'
import { ToastContainer } from 'react-toastify'
import { Outlet } from 'react-router-dom';

function App() {
  

  return (
    <>

      <div>
        <Navber></Navber>
        <div className='pt-24'>
          <Outlet></Outlet>
        </div>
        <ToastContainer></ToastContainer>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
