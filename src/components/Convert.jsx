import React, { useState } from 'react'

import { useAlert } from 'react-alert'
import axios from "axios";

export const Convert = () => {

    const alert = useAlert()

    const [src, setSrc] = useState(null);

    function handleConvert() {
    
        axios({
            url: "http://localhost:5000/convert",
            method: "post",
            responseType: "blob",
          })
            .then((res) => {
              
              setSrc(URL.createObjectURL(res.data));
              alert.success("File converted successfully")
            })
            .catch((error) => {
              console.log("axios error:", error);
              alert.error("Error occurred while converting your audio file")
            });
    
    }
        
    

    return (
      <div>
          <button onClick={handleConvert}>Convert</button>
          {src? <audio id="audio" controls src={src} /> : null}
      </div>
    )
}
