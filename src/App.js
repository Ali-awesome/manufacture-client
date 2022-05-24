import './App.css';
import Navbar from './Components/Shared/Navbar/Navbar';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/dashboard' element={<Home></Home>}></Route>
        <Route path='/login' element={<Home></Home>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
