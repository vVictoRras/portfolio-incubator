import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Work} from "./work/Work.tsx";
import socialImg from "../../../assets/images/proj1.webp"
import timerImage from "../../../assets/images/proj2.webp"
import {Container} from "../../../components/Container.ts";
import {S} from './work/Works_Styles.ts'

//const tabsItems = ["All", "Landing Page", "React", "Spa"]

const tabsItems : Array<{ status: TabsStatusType ,title: string }> = [
    {
        title: "All",
        status: "all"
    },
    {
        title: "Landing Page",
        status: "landing"
    },
    {
        title: "React",
        status: "react"
    },
    {
        title: "spa",
        status: "spa"
    }
]

const worksData = [
    {
        title: 'Social Network',
        src: socialImg,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
            'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ' +
            'Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        type: 'spa'
    },
    {
        title: 'Timer',
        src: timerImage,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
            'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ' +
            'Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        type: 'react'
    }
]

export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus]=useState("all")
    let filteredWorks = worksData

    if(currentFilterStatus === "landing"){
        filteredWorks = worksData.filter(work => work.type === "landing")
    }
    if(currentFilterStatus === "react"){
        filteredWorks = worksData.filter(work => work.type === "react")
    }
    if(currentFilterStatus === "spa"){
        filteredWorks = worksData.filter(work => work.type === "spa")
    }

    function changeFilterStatus(value: TabsStatusType){
        setCurrentFilterStatus(value)
    }

    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu tabsItems={tabsItems}
                         changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}></TabMenu>
                <FlexWrapper justify={"space-between"} align={'flex-start'} wrap={'wrap'}>

                    {filteredWorks.map((w) => {
                        return (
                            <Work title={w.title} src={w.src} text={w.text}/>
                        )
                    })}

                </FlexWrapper>
            </Container>

        </S.Works>
    );
};

