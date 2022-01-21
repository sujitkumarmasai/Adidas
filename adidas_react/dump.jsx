import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./productDetails.css"

import {Details} from "./details"


export const ProductsDetails = () => {
  const { id } = "w1"
  const [data, setData] = useState({});
  const [imagearr, setimagearr] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3002/adidas_data/w1`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setimagearr(result.gallary);
      });
  }, []);
  return (
    <>



<div id="productDescription">
<div class="gfg">
        <img src={imagearr[0]}/>
        <h3 class="first-txt">
            GeeksforGeeks
        </h3>
          
        <h3 class="second-txt">
            A computer science portal
        </h3>
    </div>
        
        <div id="descriptionBox"></div>
        <div id="specificationBox"></div>
       
    </div>

   
    
  
    
      {/* <p>{data.details[]}</p> */}
     
    <table className="table1">
  
      <tr>
        <th className="row head td1">Atrbute</th>
        <th className="row head td1">value</th>
      </tr>
      

    
      <tr >
        <td className="row td1">Name and adress of importer</td>
        <td className="row1 td1">{data.title}</td>
      </tr>
      
      <tr >
        <td className="row td1">Net Quantity</td>
        <td className="row1 td1">{data.title}</td>
      </tr>
      
      <tr >
        <td className="row td1">Gender</td>
        <td className="row1 td1">{data.title}</td>
      </tr>
      
      <tr >
        <td className="row td1">Gender</td>
        <td className="row1 td1">{data.title}</td>
      </tr>
    </table>

   
      {/* <h1>{data.title</h1>
      <li>{data.price}</li> */}
     
  </>

  );
};