// import React, { useContext, useState } from 'react'
import { stateContext } from '../../context/stateContext';
import { Card } from 'react-bootstrap';
import { CardActions, CardContent, Checkbox, IconButton, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Fav = () => {
    const {state:{forms},dispatch} = useContext(stateContext)
    console.log(forms);
    
    const payFav = (e)=>{
      dispatch({
        type:"FAV",
        payload:{
          id:e.id,
          isFav:e.isFav
        }
      })
    }
    const payCard = (e)=>{
      dispatch({
        type:"CARD",
        payload:{
          id:e.id,
          isCard:e.isCard
        }
      })
    }
  return (
    <div className='full container'>
            <div className='row'>
            {forms?.filter(e => e.isFav === true )?.map((value,index)=>{
              return  <div className='col-lg-3' key={index}>
              <Card className="proCard" sx={{ maxWidth: 345 }}>
      {/* <CardMedia
        component="img"
        height="194"
        image=""
        alt="image"
      /> */}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        <img className='home-img'
          src={require('./../../assets/images/login-bg.jpg')} 
          alt="logo" 
        />
          <h2 className='proName'>{value.Name}</h2>
          <p className="proDetails">{value.Description}</p>
          <p className='proPrice'>Price:<CurrencyRupeeIcon className='rupee'/>{value.Price}</p>
          <p className='proStock'>Available : {value.Stock} Stock</p>
        </Typography>
      </CardContent>
      <CardActions className="home-icons" disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox   checked={value.isFav} onClick={()=>payFav(value)}  icon={<FavoriteIcon />} checkedIcon={<FavoriteIcon style={{color:"red"}}/>} id="checkbox"/>
        </IconButton>
        <IconButton aria-label="share">
        <Checkbox   checked={value.isCard} onClick={()=>payCard(value)}  icon={<ShoppingCartIcon />} checkedIcon={<RemoveShoppingCartIcon style={{color:"red"}}/>} id="checkbox"/>
        </IconButton>
      </CardActions>
    </Card>
            </div>
            })
            }
            </div>
        </div>
  )
}

export default Fav
