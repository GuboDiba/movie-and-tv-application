import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./atoms/moviedetails"


function App() {
  return (
    <div>
     
      <MovieList/>
      
     <BrowserRouter>
      <Routes>
      
        <Route path="/MovieLIst" element={ <MovieList/>}></Route>
        {/* <Route path="/ProductDetail" element={<ProductDetail />}></Route> */}
       

  

      </Routes>
    </BrowserRouter>
    </div>
  );
};




export default App;
