import React from 'react';
import {Icon} from "../icon/Icon.tsx";
import {FlexWrapper} from "../FlexWrapper.ts";
import {S} from './Footer_Styles.ts'
const SocialItemsData = [
    {
        iconId: "tg"
    },
    {
        iconId: "instagram"
    },
    {
        iconId: "in"
    },
    {
        iconId: "vk"
    }
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.Name>Victor</S.Name>
                <S.SocialList>
                    {SocialItemsData.map((s, index) => {
                        return (
                            <S.SocialItem key={index}>
                                <S.SocialLink>
                                    <Icon height={'21'} width={'21'} viewBox={'0 0 21 21'} iconId={s.iconId}/>
                                </S.SocialLink>
                            </S.SocialItem>
                        )
                    })}
                </S.SocialList>
                <S.Copyright>2025 All Rights Reserved</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    )
        ;
};

