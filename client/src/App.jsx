import './App.css'
import '../src/css/market.css'
import ProductDetail from './pages/ProductDetail';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/home' element={<Home/>}></Route>
          <Route exact path='/detail' element={<ProductDetail />}></Route>

        </Routes>
      </Router>
    </>
  )
}

export default App
