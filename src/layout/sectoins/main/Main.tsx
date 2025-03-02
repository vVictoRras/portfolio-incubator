import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/1.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-between"}>
                <div>
                    <span>Hi</span>
                    <Name>I am Victor</Name>
                    < MainTitle>A Web Developer.</MainTitle>
                </div>
                <Photo src={photo} alt=""/>
            </FlexWrapper>


        </StyledMain>
    );
};


const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`
const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #b1a89c;
`

const MainTitle = styled.h1`


`
const Name = styled.h2`


`