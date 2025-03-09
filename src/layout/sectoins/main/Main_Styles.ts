import styled from "styled-components";
import {theme} from "../../../styles/Theme.tsx";
import {font} from "../../../styles/Common.tsx";


const PhotoWrapper = styled.div`
position: relative;
    z-index: 0;
   
 &::before{
     content: '';
     width: 360px;
     height: 470px;
     border: 5px solid ${theme.colors.accentBg};
     
     position: absolute;
     top: -24px;
     left: 24px;
     z-index: -1;
     
     @media  ${theme.media.mobile}{
         width: 314px;
         height: 414px;
         top: -17px;
         left: 20px;
     }
 }
    @media  ${theme.media.mobile}{
        margin-top: 65px;
    }
        
    }
`
const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
    margin-right: 20px;
    
    @media ${theme.media.mobile}{
        width: 310px;
        height: 380px;
    }
`
const Main = styled.section`
    min-height: 100vh;
    background-color: #b1a89c;
    display: flex;
`

const MainTitle = styled.h1`
   
    ${font({ weight:400, Fmax: 27, Fmin: 20})}

`
const SmallText = styled.span`
    font-weight: 400;
    font-size: 16px;
    
    
    `
const Name = styled.h2`
    ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 50, Fmin: 36})}
    letter-spacing: 0.05em;
    margin: 10px 0;
    
    span {
        position: relative;
        z-index: 0;
        white-space: nowrap;
        
        &::before{
            content:'';
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${theme.colors.accentBg};
            
            position: absolute;
            bottom: 0;
            z-index: -1;
        }
    }
    @media ${theme.media.mobile} {
        
        margin: 15px 0 22px;      
    }
`


export const S={
    Main,PhotoWrapper,Photo,MainTitle,SmallText,Name

}