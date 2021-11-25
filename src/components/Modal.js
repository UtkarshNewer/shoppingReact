import React from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

export function Overlay() {
  return <div className={classes.backdrop}></div>;
}
export function ModalOverlay(props){
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
export default function Modal(props) {
  return (
    <>
        {ReactDOM.createPortal(<Overlay/>,document.getElementById("overlay"))}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,document.getElementById("modal"))}
    
    </>
  );
}
