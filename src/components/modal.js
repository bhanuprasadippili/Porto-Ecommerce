import { useEffect, useState } from "react"
import React from "react";
import {AiOutlineCloseCircle} from "react-icons/ai";
import "../styles/modal.scss";


const Modal =  () => {
    const [modal, setModal] = useState(false)
   useEffect(()=>{
    setTimeout(()=>{
        setModal(true)
      },3000)
   },[])
    return(
        <div className="model-container">
            <div className={modal ? "model":"model-none"}>
             <p onClick={()=>setModal(false)} className="close"><AiOutlineCloseCircle/></p>
            <div className="model-content">
                <h2>SUBSCRIBE TO NEWSLETTER</h2>
                <p>Subscribe to the Porto mailing list to receive updates on new arrivals,
                     special offers and our promotions</p>
                <div className="model-email"><input placeholder="Your Email Address"/><button>SUBMIT</button></div>
            </div>
          </div>
        </div>
    )

}

export default Modal;