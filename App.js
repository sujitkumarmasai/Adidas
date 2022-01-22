
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
      <div className="App">
      <div>
        <img src="./images/adidas.png.png" alt='' />
      </div>
    <div className='Top'>
       <h1>PAYMENT METHOD</h1>
       <p>All transactions are safe and secure</p>
       </div>
       <hr style={{width:"600px",marginLeft:"150px",marginTop:"20px"}}></hr>
       <div className='payment'>   
       <h4>Credit/Debit Card</h4>      
       <p>You may be directed to your bank's 3D secure process to authenticate your information.</p>
       </div>
       <form>
         <input type="number" placeholder='Card Number *'/><br/>
         <input type="text" placeholder='Name On Card *'/><br/>
         <input className='second' type="text" placeholder='MM/YY *'/>
         <input className='third' type="number" placeholder='CVV *'/>
         <hr style={{width:"600px",marginLeft:"150px",marginTop:"20px"}}></hr>
         <h4>Cash on Delivery</h4>
       </form>
       
       <button> <a className='img' href='https://www.delaneystudios.com.au/uploads/1/1/8/3/118392473/payment-successful_orig.png'>PLACE ORDER</a></button>
       <div className='rightsideup'>
       <h3>ORDER SUMMARY</h3>
       <div>DELIVERY<span style={{marginLeft:"150px"}}>FREE</span></div>
       <h5>TOTAL</h5>
       <p2>(inclusive of all taxes)<span style={{marginLeft:"40px"}}> ₹ 1979.00</span></p2>
       </div>

       <div className='rightsidedown'>
       <h3>ORDER DETAILS</h3>
       <h5>DELIVERY OPTION</h5>
       <p3>Standard Delivery</p3><br/>
       <p4> within 3-9 Business Days FREE</p4>
       </div>

    </div>
   
  );
}
export default App;
