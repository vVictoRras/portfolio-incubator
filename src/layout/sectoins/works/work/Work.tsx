import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link.tsx";
import {theme} from "../../../../styles/Theme.tsx";
import {Button} from "../../../../components/Button.tsx";

type WorkPropsType = {
    title: string,
    text: string,
    src: string,
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Image src={props.src} alt=""/>
                <Button>View Project</Button>
            </ImageWrapper>

            <Description>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <Link href={"@"}>Demo</Link>
                <Link href={"@"}>Code</Link>
            </Description>
        </StyledWork>
    );
};
const StyledWork = styled.div`
    background-color: ${theme.colors.secondaryBg};
    max-width: 50%;
    height: auto;
    width: 100%;
    margin: 10px;

    ${Link} {
        padding: 10px 0;

        & + ${Link} {
            margin-left: 20px;
        }
    }
`
const ImageWrapper = styled.div`
    position: relative;

    &:hover {
        ${Button}{opacity: 1}
        
        &::before {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(4px);
        }
    }
    
    ${Button}{
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        
        
        &::before{
            width: 100%;
            height: 100%;
        }
    }
    
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;

`

const Title = styled.h3`

`
const Text = styled.p`
    margin: 14px 0 10px;
`
const Description = styled.div`
    padding: 25px 20px;

`