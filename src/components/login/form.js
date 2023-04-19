import React, { useContext, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { stateContext } from '../../context/stateContext'
import { Checkbox, TextField } from '@mui/material';
import { Favorite, FavoriteBorder, SettingsBackupRestoreOutlined } from '@mui/icons-material';

localStorage.setItem('edit',JSON.stringify([]));
let tasks = [];
const Form = () => {

    // const [inpName,setName]=useState(JSON.parse(localStorage.getItem('edit'))?.length ?JSON.parse(localStorage.getItem('edit'))[0].Name:'')
    // const [inpDes,setDes]=useState(JSON.parse(localStorage.getItem('edit'))?.length ?JSON.parse(localStorage.getItem('edit'))[0].Description:'')
    // const [isCompleted,setIsCompleted]=useState('false')
    const {state,dispatch} = useContext(stateContext)
    console.log(state)
    tasks=state.forms;
    const [inpName,setName]=useState(state.edit?state.edit[0] ?.Name:'')
    const [inpDes,setDes]=useState(state.edit?state.edit[0]?.Description:'')
    const [inpPri,setPri]=useState(state.edit?state.edit[0] ?.Price:'')
    const [inpStock,setStock]=useState(state.edit?state.edit[0]?.Stock:'')
    const [isCompleted,setIsCompleted]=useState(false)
    const [formSub,setFormsub]=useState(false)
   // const [isAnswer,setAnswer]=useState(JSON.parse(localStorage.getItem("fromDetails")) || []);

    
  
 // let editItem = JSON.parse(localStorage.getItem('edit'))  
  let navigator = useNavigate()
    const inputName=(e)=>{
         console.log("e",e.target.value)
         setName(e.target.value)
    }
    const inputDes=(e)=>{
        console.log("e",e.target.value)
        setDes(e.target.value)
   }
   const inputPri=(e)=>{
    console.log("e",e.target.value)
    setPri(e.target.value)
    }
    const inputStock=(e)=>{
        console.log("e",e.target.value)
        setStock(e.target.value)
    }
    const checked=(e)=>{
        setIsCompleted(e.target.checked?true:false)
    }
    const craeteId = ()=>{
      return Math.floor(Math.random()*1000000)
    }
    const sub=(e)=>{
        e.preventDefault();
        setFormsub('true')
          console.log(inpName,inpDes)
          const setof={Name:inpName, Description:inpDes,Price:inpPri,Stock:inpStock, Answer:isCompleted,id:craeteId(),isFav:false,isCard:false}
            if(state.edit?.length>0){
           tasks[state.edit[1]]=setof;
           dispatch({
            type:"EDIT",
            payload:[],
           }
            )
          }
         else{ 
           tasks.push(setof)
         }

       
        navigator("/Home")
    }
  return (
    <div className='form-bg background-images'>
        <form onSubmit={sub}>
        <h2 className='login-head'>Add Product...</h2>
            <TextField className="input" id="outlined-basic" label="Name" name='name' value={inpName} onChange={inputName} variant="outlined" />
            {inpName==="" && formSub && <div className='errorMsg'>The Name Is Required</div>}
            <TextField className="input" id="outlined-basic" label="Desription" name='des' value={inpDes} onChange={inputDes} variant="outlined" />   
            {inpDes==="" && formSub &&<div className='errorMsg'>The Des Is Required</div>}
            <TextField className="input" type="number" id="outlined-basic" label="Price" name='price' value={inpPri} onChange={inputPri} variant="outlined" />   
            {inpPri==="" && formSub &&<div className='errorMsg'>The Price Is Required</div>}
            <TextField className="input" type="number" id="outlined-basic" label="Stock" name='stock' value={inpStock} onChange={inputStock} variant="outlined" />   
            {inpStock==="" && formSub &&<div className='errorMsg'>The Stock Is Required</div>}  
            <Checkbox value={isCompleted} onChange={checked} icon={<FavoriteBorder />} checkedIcon={<Favorite />} id="checkbox"/>      
            <label for='checkbox' className='para'>Accept</label>
            <input className="input link1" type={"submit"} onClick={()=>dispatch({type:"ARRAY",payload:tasks})}></input>
        </form>
    </div>
  )
}

export default Form