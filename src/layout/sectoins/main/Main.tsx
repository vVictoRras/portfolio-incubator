import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/1.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
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
    z-index: 1;

 &::before{
     content: '';
     width: 360px;
     height: 470px;
     border: 5px solid ${theme.colors.accentBg};
     
     position: absolute;
     top: -24px;
     left: 24px;
     z-index: -1;
 }   
`
const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`
const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #b1a89c;
    display: flex;
`

const MainTitle = styled.h1`
    font-weight: 400;
    font-size: 27px;

`
const SmallText = styled.span`
    font-weight: 400;
    font-size: 16px;
    
    `
const Name = styled.h2`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 50px;
    letter-spacing: 0.05em;
    margin: 10px 0;
    span {
        position: relative;
        z-index: 0;
        &::before{
            content:' ';
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${theme.colors.accentBg};
            position: absolute;
            bottom: 0;
            z-index: -1;
        }
    }
    
`