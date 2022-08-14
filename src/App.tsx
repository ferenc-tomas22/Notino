import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import Home from './components/Home'
import AddTodo from './components/AddTodo'
import NotFound from './components/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/addTodo' element={ <AddTodo /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
