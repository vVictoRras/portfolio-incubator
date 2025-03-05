import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/logo.tsx";
import {Container} from "../../components/Container.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {MobileMenu} from "./mobileMenu/MobileMenu.tsx";
import {HeaderMenu} from "./headerMenu/HeaderMenu.tsx";

const items = ["Home", "Skills", "Works", "Testimony","Contacts"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    <HeaderMenu menuItems={items}/>
                    <MobileMenu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
        ;
};
const StyledHeader = styled.header`
    background-color: #1F1F20;
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
`

