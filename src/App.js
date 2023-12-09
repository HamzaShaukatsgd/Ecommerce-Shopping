import Home from "./pages/Home"
import CategoryPage from "./pages/CategoryPage"
import Cart from "./pages/Cart"
import ProductPage from "./pages/ProductPage"
import Login from "./pages/Login"
import Register from "./pages/Register"
import {  Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
     <div className="text-black">
     <Routes>
      
      <Route exact path='*' element={<Home/>} />
      <Route exact path='/CategoryPage' element={<CategoryPage/>} />
      
      <Route exact path='/Cart' element={<Cart/>} />
      <Route exact path='/Register' element={<Register/>} />
      <Route exact path='/Login' element={<Login/>} />
      <Route exact path='/ProductPage' element={<ProductPage/>} />
      </Routes>
       {/* <ProductPage/> */}
     </div>
    </div>
  );
}

export default App;
