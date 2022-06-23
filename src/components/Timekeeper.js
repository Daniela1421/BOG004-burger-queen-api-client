import React from 'react'
import { useEffect, useState} from "react";

export default function Timekeeper() {
    const [diff, setDiff] = useState(null)
    const [initial, setInitial] = useState(null)

    // const tick = () => {
    //     setDiff(new Date(+new Date() - initial))
    // }; 
    
    //https://www.youtube.com/watch?v=sSWGdj8a5Fs**************************************************
    const start = () => {
        setInitial(+new Date())
    }; 

    // useEffect(() => {
    //   if(initial){
    //     requestAnimationFrame(tick);
    //   }
    
    // }, []); 

    // useEffect(() => {
    //     if(diff){
    //       requestAnimationFrame(tick);
    //     }
      
    //   }, [setDiff]);   

    const timeFormat = (date) => {
        if(!date) return "00:00:00"; 
    
        let mm = date.getUTCMinutes(); 
        let ss = date.getSeconds(); 
        let cm = Math.round(date.getMilliseconds() / 10); 

        mm = mm < 10 ? "0" + mm : mm; 
        ss = ss < 10 ? "0" + ss : ss; 
        cm = cm < 10 ? "0" + cm : cm; 

        return `${mm}:${ss}:${cm}`; 
    }

  return (
    <div className='timekeeper' onClick={start}>
        <h2 className='timer'>{timeFormat(diff)}</h2>
    </div>
  )

  
}
