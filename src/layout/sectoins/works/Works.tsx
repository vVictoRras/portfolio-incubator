import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {TabMenu} from "./tabMenu/TabMenu.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Work} from "./work/Work.tsx";
import socialImg from "../../../assets/images/proj1.webp"
import timerImage from "../../../assets/images/proj2.webp"
import {Container} from "../../../components/Container.ts";
import {S} from './work/Works_Styles.ts'

const worksItems = ["All", "Landing Page", "React", "Spa"]

const workData = [
    {
        title: 'Social Network',
        src: socialImg,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
            'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ' +
            'Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
        title: 'Timer',
        src: timerImage,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
            'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ' +
            'Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }
]

export const Works: React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksItems}></TabMenu>
                <FlexWrapper justify={"space-between"} align={'flex-start'} wrap={'wrap'}>

                    {workData.map((s, index) => {
                        return (
                            <Work title={s.title} src={s.src} text={s.text} key={index}/>
                        )
                    })}

                </FlexWrapper>
            </Container>

        </S.Works>
    );
};

