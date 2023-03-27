import './App.css'
import { Route, Routes } from 'react-router-dom'
import { UserPanel } from './routes/UserPanel'
import { Home } from './routes/Home'
import { Navbar } from './components/navbar/Navbar'
import { OpenAI } from './routes/OpenAI'

function App() {
  return (
    <div className='App bg-white dark:bg-black h-screen'>
      {/* Routes */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user-panel' element={<UserPanel />} />
        <Route path='/chat' element={<OpenAI />} />
      </Routes>
    </div>
  )
}
export default App
