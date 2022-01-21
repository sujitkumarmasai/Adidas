import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./productDetails.css"

import {Details} from "./details"
import {Details2} from "./details2"
import { FaArrowLeft } from "react-icons/fa";

export const ProductsDetails = () => {
  const { id } = "w1"
  const [data, setData] = useState({});
  const [imagearr, setimagearr] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3002/adidas_data/w4`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setimagearr(result.gallary);
      });
  }, []);
  return (
    <>
 

    
      
      
        <div id="rightSideBox">
            <a href="signup.html"><button>sign up</button></a>
            <a href="adidas_checkOutPage.html"><button>log in</button></a>
            <p>
                <a href="Newcart.html"><i class="material-icons">shopping_bag</i></a>
            </p>
        </div>

        
    <div class="adjustement">
        <a href="product_page.html"><FaArrowLeft/><span id="backBtn">&nbsp; &nbsp;BACK</span></a>
        <a href="adidas_home_page.html"><span>Home</span></a>
    </div>

    <div id="productDescription">
        <div id="imageBox"style={{display: 'flex'}}  ><img style={{height:"100%"}} src={imagearr[0]}/>
       <p style={{marginTop:"40%",marginLeft:"-65%",fontSize:"220%"}}><FaArrowLeft/></p>
        </div>
        <div id="descriptionBox">Hi</div>
        <div id="specificationBox"><table className="table1">
          <div style={{display:"flex"}}>
            <div style={{textAlign:"left",margin:"20px"}}>
          <Details />
          </div>
          <div style={{textAlign:"left",margin:"20px"}}>
        <Details2/>
        </div >
          </div>
        
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
</div>
    </div>

    <script></script>
  </>

  );
};