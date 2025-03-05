import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper.tsx";
import {theme} from "../../styles/Theme.tsx";


export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit.</Text>
                    <Name>Victor@gmail.com</Name>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span> </span>
                <span className={'active'}> </span>
                <span> </span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    //border: 1px solid red;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Name = styled.span`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    margin: 22px 0 42px;
    display: inline-block;
    
`
const Slide = styled.div`

    text-align: center;

`
const Text = styled.p`

`
const Pagination = styled.div`
    span {
        display: inline-block;
        width: 7px;
        height: 7px;
        margin: 5px;
        background: rgba(255, 255, 255, 0.5);
             border-radius: 20px;
        
        & + span{
            margin-left: 5px;
        }
        &.active{
            background-color: ${theme.colors.accentBg};
            width: 20px;
        }
    }
`
