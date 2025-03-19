import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Doubts from './pages/Doubts'
import Scheduling from './pages/Scheduling'
import Operation from './pages/Operation'
import Support from './pages/Support'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/doubts' element={<Doubts/>}/>
        <Route path='/scheduling' element={<Scheduling/>}/>
        <Route path='/operation' element={<Operation/>}/>
        <Route path='/support' element={<Support/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
