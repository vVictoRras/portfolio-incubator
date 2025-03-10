import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme.tsx";

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    color: ${theme.colors.accentBg};

    & + & {
        top: 50%;
        span {
            transform: translateY(-50%);
            display: inline-block;
        }
    }

}
`

const MenuItem = styled.li`
    position: relative;
    
    &::before {
    content: '';
    display: inline-block;
        height: 3px;
        background-color: ${theme.colors.accentBg};
        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;
        transform: scale(0);
    }

    &:hover {
        &::before{
        transform: scale(1);
    }
        ${Mask} {
            transform: skewX(12deg) translateX(5px); 
            color:${theme.colors.font};
            & + ${Mask}{
            transform: skewX(12deg) translateX(-5px);
        }

    }

`
const Link = styled.a`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    font-size: 30px;
    text-align: center;
    color: transparent;
`

// Mobile Menu

const MobileMenu = styled.nav`
    
`
const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: rgba(31, 31, 32, 0.9);
    display: none;

    ${props => props.isOpen && css<{isOpen: boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
`
const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    width: 200px;
    height: 200px;
    top: -100px;
    right: -100px;
    z-index: 9999999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.font};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{isOpen: boolean}>`
            background-color: rgba(255, 255, 255, 0);

        `}
        
        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
                width: 36px;
            `}
        }
    }
`

// Desktop Menu
const DesktopMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
    }

`

export const S={
    Link,Mask,MenuItem,MobileMenu,MobileMenuPopup,BurgerButton,DesktopMenu
}


