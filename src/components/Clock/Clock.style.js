import styled from 'styled-components';
const colorClock = '#222222';
export const DateContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap:20px;
    width: calc(100vw/3);
    margin-top: 15px;
    margin-left: 10%;
}

    @media screen and (max-width: 1024px){
        display:none;
  }
`
export const ClockContainer = styled.h1`
    font-size: 7.5vw;
    text-align: center;
    font-family: 'Mark Pro Bold';
    font-weight: 700;
    color: ${colorClock};
   
`
export const FullDateContainer = styled.p`
    text-align: center;
    font-weight: 400;
    font-size: 0.875em;
    font-family: 'Mark Pro';
    color: ${colorClock};
    margin-top: -3.5vw;
    margin-right: 2vw;
`