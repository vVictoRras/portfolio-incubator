import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";


export const SectionTitle = styled.h2`
    text-align: center;
    font-weight: 600;
    font-size: 36px;
    letter-spacing: 5px;
    font-family: 'Josefin Sans', sans-serif;
    position: relative;
    margin-bottom: 90px;
    
    &::before{
        content: ' ';
        width: 55px;
        height: 1px;
        background-color: ${theme.colors.accentBg};
        display: inline-block;
        
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -30px;
        
    }
`