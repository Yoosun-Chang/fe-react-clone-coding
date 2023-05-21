import styled from "styled-components";


const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 90px 0px 100px 0px;
`;

const Headtext = styled.h1`
  font-size: 35px;
  font-weight: 300;
  height: 58px;
`;

const Intext = styled.p`
  word-spacing: -2px;
  width: 100%;
  text-align: center;
  font-size: 18px;
  line-height: 1.5;
  color: #6c6a6a;
  margin-bottom: 25px;
`;

const btnwrap= styled.div`
 display: flex;
 justify-content: space-between;
 width: 400px;

`;

const HeadButton = styled.button`
  width: 150px;
  height: 40px;
  background-color: #007bff;
  color: #fff;
  font-size:15px;
  margin-right: 5px;
  border: none;
  border-radius: 0.2rem;
  cursor: pointer;
  
  &:hover {
    background-color: blue;
    transition-duration: 0.2s;
    /*transition-delay: 0.1s;*/
  }
`;


const InButton =styled.button`

width: 150px;
  height: 40px;
  background-color:#6c757d;
  color: #fff;
  font-size:15px;
  border: none;
  border-radius: 0.2rem;
  cursor: pointer;

  &:hover {
    background-color:  #6b6969;
    transition-duration: 0.2s;
    /*transition-delay: 0.1s;*/
  }
`;


const Maincomponent =  (props) => {
  return (
    <Top>
      <Headtext>Album example</Headtext>
      <Intext>
        Something short and leading about the collection below—its contents,
        <br />, the creator, etc. Make it short and sweet, but not too short so
        folks don’t <br /> simply skip over it entirely 
        </Intext>
        <btnwrap>
        <HeadButton>Main call to action</HeadButton>
        <InButton>Secondary action</InButton>  
        </btnwrap>
    </Top>
  );
};

export default Maincomponent;