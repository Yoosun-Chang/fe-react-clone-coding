import React from "react";
import styled from "styled-components"
import { AiOutlineCamera } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

const Headerwrapper = styled.div `
  background-color: #363a3f;
  width: 100%;
  height: 55px;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
`;

const Title = styled.h1`
  color:white;
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left :200px;

`;

const Text = styled.h1`
    font-size: 20px;
    margin-left: 5px;
`
const Button = styled.h1`
    display: flex;
    flex-direction: column;
    justify-content: center;

    border: 1px solid #494E53;
    border-radius: 5px;

    margin-top: 5px;
    margin-bottom: 5px;
    margin-right: 220px;

    padding:5px;
    padding-left: 12px;
    padding-right: 12px;
    
    cursor: pointer;
`
const Header = () => {
    return (
        <Headerwrapper>
            <Title> 
                <AiOutlineCamera color="white" size="24px"/>
                <Text>Album</Text>
            </Title>
            <Button>
                <AiOutlineMenu color="#9A9DA0" size="28px"/>
            </Button>
        </Headerwrapper>
    );
};


export default Header;
