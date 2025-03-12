import styled from 'styled-components'


export const Container = styled.div`
background-color: #0000;
width: 50%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row-reverse;
position: fixed;
padding: 50px;
max-width: 1200px;

iframe{

   border: none;
}

img{
   width: 50px;
   height: 50px;
   top: 0;
   position: absolute;
   cursor: pointer;
}

`

export const Background = styled.div`
background-color: rgba(0,0,0, 0.6);
z-index: 999;
height: 100vh;
width: 100vw;
position: absolute;
display: flex;
align-items: center;
justify-content: center;
`
