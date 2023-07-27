import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Data from "./data.json";
// import AOS from "aos"
// import "aos/dist/aos.css"

const Jsondisplay = () => {
    const [change, setChange] = useState(false);

    useEffect(() => {
        setInterval(() => {
        setChange((el) => el +1);
        }, 5000);
        AOS.init({
          duration: 2000,
          easing: "ease-in-out",
          delay: 300,
        })
    
}, [])

return (
   <Container>
    <Wrapper>
        <Text>{Data[change % Data.length].text}</Text>
        <Img src={Data[change % Data.length].img}alt="slide_image "/>
        <br/>
        <br/>
        <br/>
        <p data-aos="flip-right" style={{color: "whitesmoke"}}>
            ssdddddddddddddddhhhhhhhhiiiiiiiiiiiiiiihhhhhhhhhhhhhhhhhh
        </p>
        <br/>
        <br/>
        <br/>
        <p data-aos="fade-right" style={{color: "whitesmoke"}}>
            this fades right
        </p>
        <br/>
        <br/>
        <br/>
        <p data-aos="fade-left" style={{color: "whitesmoke"}}>
            flips left cccccccccccccccccccc
        </p>

    </Wrapper>
   </Container> 

)}
export default Jsondisplay;

const Container = styled.div`
  height: auto;
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;

`;
const Wrapper = styled.div`
  height: 80%;
  width: 100%;
  display:flex;
  flex-direction:column;

`;
const Text = styled.h1`
  color: whitesmoke;
  font-size: 25px;

`;
const Img = styled.img`
  height: 90%;
  width: 50%;
  margin-top: 20px;
`;
