import styled from "styled-components";
import {theme} from "../styles/Theme.tsx";
import {font} from "../styles/Common.tsx";


export const SectionTitle = styled.h2`
    ${font({family:"'Josefin Sans', sans-serif", weight: 600 , Fmax: 36,   Fmin: 30})};
    
    text-align: center;
    letter-spacing: 5px;
    margin-bottom: 90px;
    
    position: relative;
    
    &::before{
        content:"";
        width: 55px;
        height: 1px;
        background-color: ${theme.colors.accentBg};
        display: inline-block;
        
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -30px;
        
        @media ${theme.media.mobile} {
            bottom: -24px;
        };
        
    }
`