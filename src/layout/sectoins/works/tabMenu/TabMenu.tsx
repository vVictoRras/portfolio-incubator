import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme.tsx";



export const TabMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.menuItems.map((item,index) => {
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>
                })}

            </ul>
        </StyledTabMenu>
    );
};
//
const StyledTabMenu=styled.nav`
ul{
    display: flex;
    gap: 30px;
    justify-content: center;
}
`
const ListItem=styled.li`
  position: relative;
    
`
const Link=styled.a`
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 10px;
    
    &::before{
        content: ' ';
        display: inline-block;
        height: 10px;
        width: 10px;
        color: ${theme.colors.accentBg};

        position: absolute;
        bottom: -5px;
        left: -10px;
        right: -10px;
        
          
    }
    
`