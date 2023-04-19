import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='container'>
        <div className='row'>
        <Link className="link" to={"/Home"}><HomeIcon className="nav-icon" /></Link>
        <Link className="link" to={"/Form"}><AddIcon className="nav-icon" /></Link>
        <Link className="link" to={"/Fav"}><FavoriteIcon className="nav-icon"  /></Link>
        <Link className="link" to={"/CardAdd"}><ShoppingCartIcon className="nav-icon"  /></Link>
        </div>
        </div>
    </div>
  )
}

export default Navbar
