import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/1.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.tsx";
import {font} from "../../../styles/Common.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={'wrap'}>
                    <div >
                        <SmallText>Hi</SmallText>
                        <Name>I am <span>Victor Sirotilo</span></Name>
                        < MainTitle>A Web Developer.</MainTitle>
                    </div>
                    <PhotoWrapper><Photo src={photo} alt=""/></PhotoWrapper>
                </FlexWrapper>
            </Container>

        </StyledMain>
    );
};

const PhotoWrapper = styled.div`
position: relative;
    z-index: 0;
    margin-top: 65px;

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
const StyledMain = styled.section`
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