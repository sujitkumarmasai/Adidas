
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <img className='icon' src="./images/adidas.png.png" alt='' />
      </div>
      <h1 style={{marginLeft:70}}>YOUR BAG</h1>
      <h5 style={{marginLeft:70}}>TOTAL (1 item) ₹1 979.00</h5>
      <div className='top'>
        <h3>40% - 60% OFF</h3>
        <p>EXTRA 15% OFF ON ORDERS ABOVE ₹3499</p>
        <p>SHOP NOW</p>
      </div><br/><br/>
      <div>
        <img className='pant'  src="./images/menspant.jpg" alt='' />
      </div>
      <div className='details'>
      <p>Q3 BLUV SERE PT</p>
      <p>BLACK</p>
      <p>SIZE: M</p>
      <h4>LOW IN STOCK</h4>
      <h5>Quantity 1</h5>
      </div>
      <button className='checkleft'>CHECKOUT</button>
      <div className='rightsideup'>
       <h3>ORDER SUMMARY</h3>
       <div>DELIVERY<span style={{marginLeft:"150px"}}>FREE</span></div>
       <h5>TOTAL</h5>
       <p2>(inclusive of all taxes)<span style={{marginLeft:"40px"}}> ₹ 1979.00</span></p2>
       </div>
       <div className='down'>
         <h5>NEED HELP?</h5>
         <p><a href=''>Delivery</a></p>
         <p><a href=''> Return & Refund</a></p>
         <p><a href=''> Ordering & Payment</a></p>
         <p><a href=''>Promotions & Vouchers</a></p>
       </div>
    </div>
  );
}

export default App;
