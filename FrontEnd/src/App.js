import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './routes/Home';
import Gallery from './routes/Gallery';
import Offers from './routes/Offers';
import Book from './routes/Book';
import About from './routes/About';
import SignUp from './routes/SignUp';
import Login from './routes/Login';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Gallery' element={<Gallery />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/Book' element={<Book />} />
        <Route path='/About' element={<About />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>

    </div>
  );
}

export default App;
