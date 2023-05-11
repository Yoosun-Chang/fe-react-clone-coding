import React, { useState } from "react";
import styled from "styled-components"
import { AiOutlineCamera } from "react-icons/ai";

const Headerwrapper = styled.div `
  background-color: #363a3f;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
`

const Header = ()=>{
  
    return(
      <>
      <Headerwrapper></Headerwrapper>
  
      <AiOutlineCamera />
      <div>hihihihihihi</div>
      <Header>Album</Header>
      </>

        
    );

    }

export default Header;
