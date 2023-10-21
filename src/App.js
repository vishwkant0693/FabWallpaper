
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Upload from './components/upload/Upload';


function App() {
  
  return (
    <>
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home category={"Home"} />} />
          <Route path='/upload' element={<Upload />} />
          <Route path='/anime' element={<Home category={"Anime"} />} />
          <Route path='/bikes' element={<Home category={"Bikes"} />} />
          <Route path='/cars' element={<Home category={"Cars"} />} />
          <Route path='/dark' element={<Home category={"Dark"} />} />
          <Route path='/games' element={<Home category={"Games"} />} />
          <Route path='/nature' element={<Home category={"Nature"} />} />
        </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
