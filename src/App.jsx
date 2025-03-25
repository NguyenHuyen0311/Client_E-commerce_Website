import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" exact={true} element={<Home/>}/>
          <Route path="/product-list" exact={true} element={<ProductList/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
