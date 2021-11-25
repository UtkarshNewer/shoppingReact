import React,{useState} from "react";


export default function DropDownModel(props) {
  const [value,setValue]=useState('XS');
  // console.log(value);
  const valueHandler=(e)=>{
    setValue(e.target.value);
    props.size(e.target.value);
  }
  
  
  return (
    <>
      <select name="size" id="size" className="dropdown" onChange={valueHandler} defaultValue={value} >
        <option value="XS">XS</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select>
    </>
  );
}
