import { styled, css } from 'styled-components'

const buttonStyles = css`
border: 3px solid #fff;
border-radius: 30px;
background: transparent;
color: #fff;
padding: 10px 20px;
cursor: pointer;
font-weight: 500;
font-size: 20px;


&:hover{
color: #ff0707;
background: #fff;

}

`

export const ButtonWitch = styled.button`
${buttonStyles}
`

export const ButtonRed = styled.button`
${buttonStyles}

background: #ff0707;
border: 4px solid transparent;


&:hover{
    box-shadow: 0px 0px 40px 0px rgba(255,3,3,1);
    background: #ff0707;
    color: #fff;
    
}

`


