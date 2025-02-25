import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/logo.tsx";
import {Menu} from "../../components/menu/menu.tsx";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
        </StyledHeader>
    )
        ;
};
const StyledHeader = styled.header`
    background-color: bisque;
    display: flex;
    justify-content: space-between;
`

