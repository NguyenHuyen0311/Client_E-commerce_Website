import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Footer from './components/Footer'
import ProductDetails from './pages/ProductDetails'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" exact={true} element={<Home/>}/>
          <Route path="/product-list" exact={true} element={<ProductList/>}/>
          <Route path="/product-details/:id" exact={true} element={<ProductDetails/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
