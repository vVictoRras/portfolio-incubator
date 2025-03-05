import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {FlexWrapper} from "../FlexWrapper.tsx";
import {theme} from "../../styles/Theme.tsx";


export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Name>Victor</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={'21'} width={'21'} viewBox={'0 -3 19 21'} iconId={'tg'}></Icon>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={'21'} width={'21'} viewBox={'-2 2 21 12'} iconId={'instagram'}></Icon>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={'21'} width={'21'} viewBox={'0 0 21 21'} iconId={'in'}></Icon>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={'21'} width={'21'} viewBox={'0 0 20 7'} iconId={'vk'}></Icon>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>2025</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0;
`
const Name = styled.span`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 22px;
    letter-spacing: 3px;

`

const SocialLink = styled.a`
    border-radius: 50%;
    width: 35px;
    height: 35px;
    background-color: rgba(255, 255, 255, 0.1);

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${theme.colors.accentBg};

    &:hover {
        color: ${theme.colors.primaryBg};
        transform: translateY(-4px);
    }
`
const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;
`
const SocialItem = styled.li`

`
const Copyright = styled.small`
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    opacity: 0.5;
`