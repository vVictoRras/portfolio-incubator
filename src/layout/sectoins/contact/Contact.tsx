import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Button} from "../../../components/Button.tsx";
import {Container} from "../../../components/Container.tsx";
import {theme} from "../../../styles/Theme.tsx";

export const Contact = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <StyledForm>
                    <Field placeholder={'name'}/>
                    <Field placeholder={'subject'}/>
                    <Field placeholder={'message'} as={"textarea"}/>
                    <Button type={'submit'}>Send</Button>
                </StyledForm>
            </Container>

        </StyledContacts>
    );
};

const StyledContacts = styled.section`
   
`
const StyledForm = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;
    
    textarea{
        height: 155px;
        resize: none;
    }
`
const Field = styled.input`
    width: 100%;
    background-color: ${theme.colors.secondaryBg};
    border: 1px solid ${theme.colors.borderColor};
   padding: 7px 15px;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.05em;
    color: ${theme.colors.font};
    font-family: "Poppins", sans-serif;
    
    &::placeholder {
        color: ${theme.colors.placeholderColor};
        
     text-transform: capitalize;   
    }
    
    &:focus-visible{
        outline: 1px solid ${theme.colors.borderColor};
    }
`

