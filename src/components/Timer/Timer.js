import React, { useRef, useEffect, useState } from "react";
import {ResetContainer,TimerContainer,TimerNumber,FooterResetTimerDiv,FooterResetTimerButton} from './Timer.style'

export default function Timer() {
  
  const [num, setNum] = useState(180);
  
  let intervalRef = useRef();
  
  const decreaseNum = () => setNum((prev) => prev - 1);

  useEffect(() => {
    intervalRef.current = setInterval(decreaseNum, 1000);
    
    return () => clearInterval(intervalRef.current);
  }, []);

  if(num===0){
    window.location.href = "http://localhost:3000/login";
  }


  return (
    <ResetContainer>
    <TimerContainer>
        <TimerNumber>{num}</TimerNumber>
        <p>seconds</p>
    </TimerContainer>
      <FooterResetTimerDiv>
          <FooterResetTimerButton onClick ={()=>setNum(180)}>Continuar Navegando
      </FooterResetTimerButton>
    </FooterResetTimerDiv>
    </ResetContainer>
  );
}