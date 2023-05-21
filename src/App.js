// 해당 위치에 필요한 컴포넌트를 바탕으로 직접 Bootstrap Album 페이지를 개발하시면 됩니다.
import React from 'react'
import Header from './component/Header/Header';
import GlobalStyle from './component/GlobalStyle/GlobalStyle';
import Top from './component/Top/Top';
import Footer from './component/Footer/Footer'
import Card from './component/Card/Card';
import Button from './component/Card/Button';


function App() {
  return( 
    <>
    <GlobalStyle/>
    <Header/>
    <Top/>
    <Card/>
    <Footer/>
    </>
  );
}

export default App;
