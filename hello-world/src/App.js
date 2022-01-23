
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ProductDetails } from './components/ProductDetails';
import { ProductsKids } from './components/Productskids';
import { ProductsMens } from './components/Productsmens';
import { ProductsWomens } from './components/Productswomens';

export const App=()=> {
  return (<>
    <Routes>
      <Route path="/" element={<ProductsMens/>} ></Route>
      <Route path="/womens" element={<ProductsWomens/>}></Route>
      <Route path="/kids" element={<ProductsKids/>}></Route>
      <Route path="/details/:id" element={<ProductDetails/>}></Route>
      
    </Routes>
    
   </>
);
 
     
}


