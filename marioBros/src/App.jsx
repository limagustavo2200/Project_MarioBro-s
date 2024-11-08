import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Header from './layout/Header/Header';
import BackgroundVideo from './components/BackgroundVideo/BackgroundVideo';
import Home from './pages/Home/Home';


function App() {

  return (
    <Router>
      <Header />
      <BackgroundVideo />
      
        {/* rotas para o conteúdo principal */}
        <Routes>
          <Route path='/' element={<Home/>} />

        </Routes>
    </Router>
  )
}

export default App
