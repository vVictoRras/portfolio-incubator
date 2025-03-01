import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import styled from "styled-components";
import {Menu} from "../../../components/menu/Menu.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Work} from "./work/work.tsx";
import socialImg from "../../../assets/images/proj1.webp"
import timerImage from "../../../assets/images/proj2.webp"

const worksItems = ["All", "Landing Page", "React", "Spa"]

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={worksItems}></Menu>
            <FlexWrapper justify={"space-between"}>
                <Work   src={socialImg}
                        title={'Social Network'}
                       text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
                           'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ' +
                           'Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                <Work    src={timerImage}
                         title={'Timer'}
                         text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
                           'sed do eiusmod tempor incididunt ut labore et dolore magna ' +
                           'aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}

                />
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: beige;
`