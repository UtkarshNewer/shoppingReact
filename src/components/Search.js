import { debounce } from 'lodash'
import React from 'react'
import classes from './Search.module.css'
export default function Search(props) {
    
    const searchInputHandler=debounce((e)=>{
        props.searchItem(e.target.value);
    },1000);
    return (
        <div className={`bg-secondary ${classes.searchBack}`}>
           <h1 className={classes.tagline}>All the merchandise you'd want to buy!</h1>
           <input className={classes.searchinput} onChange={searchInputHandler} type="search" placeholder="Search..."/> 
        </div>
    )
}
