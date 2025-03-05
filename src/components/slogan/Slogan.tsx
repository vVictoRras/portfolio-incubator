import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../SectionTitle.tsx";
import {Button} from "../Button.tsx";
import {Container} from "../Container.tsx";
import {FlexWrapper} from "../FlexWrapper.tsx";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container>
                <FlexWrapper direction={'column'}
                             align={'center'}>
                    <SectionTitle>SLOGAN!!!!!</SectionTitle>
                    <Button>Hire me</Button>
                </FlexWrapper>

            </Container>

        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
    min-height: 30vh;
    background-color: aqua;

`