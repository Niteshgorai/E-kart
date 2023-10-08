import '../App.css'
import { useSelector, useDispatch } from "react-redux";
import myImage from '../images/shopping-cart.png';
import { Link } from "react-router-dom";
import { productSearch } from '../redux/productAction';

const Header =()=>{
    const result= useSelector((state)=> state.cartData)
    const dispatch= useDispatch();
    console.warn("redux data in header", result)
    return(
        <div className="header">
            <Link to='/'>
            <h1 className="logo">E-COMM</h1>
            </Link>
            <div className='search-box'>
                    <input type='text' onChange={(event)=>dispatch(productSearch(event.target.value))} placeholder='search product' />
                </div>
            <Link to="/cart">
            <div className="cart-div">
                <span>{result.length}</span>
                <img src={myImage} alt=""></img>
            </div>
            </Link>
        </div>
    )
}
export default Header;