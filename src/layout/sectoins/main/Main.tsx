import React from 'react';
import photo from '../../../assets/images/1.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Container} from "../../../components/Container.ts";
import {S} from './Main_Styles.ts'

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={'wrap'}>
                    <div >
                        <S.SmallText>Hi</S.SmallText>
                        <S.Name>I am <span>Victor Sirotilo</span></S.Name>
                        < S.MainTitle>A Web Developer.</S.MainTitle>
                    </div>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt=""/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>

        </S.Main>
    );
};

