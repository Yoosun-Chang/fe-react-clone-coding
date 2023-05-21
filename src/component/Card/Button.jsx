import React from "react";
import styled from "styled-components";

const CardB = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0rem 1rem;
  width: 2.75rem;
  height: 2rem;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 400;
`;

const CardButton1 = styled.button`
  background-color: white;
    border: 0.1px solid gray;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    padding: 7px;
    font-size: 13px;
    color: gray;
    cursor: pointer;
    &:hover{
        background-color: #6C757D;
        color: white;
        transition: 0.2s;
    }
`;

const CardButton2 = styled.button`
   background-color: white;
    border: 1px solid gray;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    padding: 7px;
    font-size: 13px;
    color: gray;
    cursor: pointer;
    &:hover{
        background-color: #6C757D;
        color: white;
        transition: 0.2s;
    }
`;

const Button = () => {
  return (
    
    <div>
      <CardB>
        <CardButton1>View</CardButton1>
        <CardButton2>Edit</CardButton2>
      </CardB>
    </div>
  );
};

export default Button;