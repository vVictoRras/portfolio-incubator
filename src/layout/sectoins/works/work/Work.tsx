import React from 'react';
import {Link} from "../../../../components/Link.ts";
import {S} from './Works_Styles.ts'
import {Button} from "../../../../components/Button.ts";

type WorkPropsType = {
    title: string,
    text: string,
    src: string,
}

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={props.src} alt=""/>
                <Button>View Project</Button>
            </S.ImageWrapper>

            <S.Description>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <Link href={"@"}>Demo</Link>
                <Link href={"@"}>Code</Link>
            </S.Description>
        </S.Work>
    );
};
