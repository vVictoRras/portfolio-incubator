import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Button} from "../../../components/Button.ts";
import {Container} from "../../../components/Container.ts";
import {S} from './Contacts_Styles.ts'

export const Contact: React.FC = () => {
    return (
        <S.Contacts>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form>
                    <S.Field placeholder={'name'}/>
                    <S.Field placeholder={'subject'}/>
                    <S.Field placeholder={'message'} as={"textarea"}/>
                    <Button type={'submit'}>Send</Button>
                </S.Form>
            </Container>

        </S.Contacts>
    );
};


