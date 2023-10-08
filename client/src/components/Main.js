import '../App.css'
import { addToCart, emptyCart, removeFromCart } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { productList } from '../redux/productAction';
import { useEffect } from 'react';


function Main() {
  const dispatch= useDispatch();
  let data= useSelector((state)=>state.productData)
  console.warn("data in main component", data);
  // const product= { 
  //   name:'Iphone',
  //   type:'Mobile',
  //   price: 11000   
  // }

  useEffect(()=>{
    dispatch(productList())
  },[])
  return (
    <div >
      {/* <button onClick={()=>dispatch(addToCart(product))}>Add to cart</button>
      <div>
      <button onClick={()=>dispatch(removeFromCart(product.name))}>Remove from cart</button>
      </div> */}
      <div>
      <button onClick={()=>dispatch(emptyCart())}>Empty cart</button>
      </div>
      {/* <div>
      <button onClick={()=>dispatch(productList())}>Get Product List</button>
      </div> */}
      <div className='product-container'>
      {data && data.length > 0 ? (
  data.map((item) => (
    <div key={item?.id} className='product-item'>
      <img src={item?.photo} alt='' />
      <div>Name: {item?.color}</div>
      <div>Brand: {item?.price}</div>
      <div>Category: {item?.category}</div>
      <div>
        <button  onClick={()=>dispatch(addToCart(item))}>Add to cart</button>
        <button onClick={()=>dispatch(removeFromCart(item.id))}>Remove from cart</button>
      </div>
    </div>
  ))
) : (
  <div>No data available.</div>
)}
      </div>
      {/* <div className='product-container'>
      {data.map((item, index) => (
        <div className='product-item' key={index}>
          <img src={require(`./${item.photo}`).default} alt='' />
          <div>Name: {item.name}</div>
          <div>Color: {item.color}</div>
          <div>Brand: {item.brand}</div>
          <div>Price: {item.price}</div>
          <div>Category: {item.category}</div>
        </div>
      ))}
    </div>*/}
    </div> 
  );
}

export default Main;
