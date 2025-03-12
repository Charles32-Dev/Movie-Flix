import styled from 'styled-components'


export const Container = styled.div`
background-color: ${props => props.changeBackground ? '#000' : 'transparent'};
z-index: 99;
position: fixed;
top: 0;
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px;
min-width: 100px;
transition: background-color 1s ease-in-out;

 img{
    width: 20%;
 }
`

export const Menu = styled.ul`
display: flex;
list-style: none;
gap: 40px;
padding: 10px 50px;
`

export const Li = styled.li`
font-weight: 600;
font-size: 35px;
position: relative;
cursor: pointer;
 a{
    text-decoration: none;
    color: #ffff;
 }

 &::after{
   content: '';
   height: 3px;
   width: ${props => (props.isActive ? '100%' : 0)};
   background-color:#7e0808 ;
   position: absolute;
   bottom: -10px;
   left: 50%;
   transform: translateX(-50%);
   transition: width 0.5s ease-in-out;
 }

 &:hover::after{
width: 100%;
 }
`