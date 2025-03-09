import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Skill} from "./skill/Skill.tsx";
import {Container} from "../../../components/Container.ts";
import {S} from '../skills/skill/Skills_Styles.ts'


const skillData = [
    {
        iconId: 'code',
        title: 'HTML5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'react',
        title: 'REACT',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'css',
        title: 'CSS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'typescript',
        title: 'TYPESCRIPT',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'style',
        title: 'STYLED COMPONENTS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'figma',
        title: 'WEB DESIGN',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    }
]

export const Skills = () => {
    return (
        <S.Skills>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>

                    {skillData.map((s, index) => {

                        return <Skill iconId={s.iconId} key={index}
                                      title={s.title}
                                      description={s.description}/>
                    })}

                </FlexWrapper>
            </Container>

        </S.Skills>
    );
};

