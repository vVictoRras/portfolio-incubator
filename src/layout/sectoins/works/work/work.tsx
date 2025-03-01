import React from 'react';
import styled from "styled-components";

type WorkPropsType = {
    title: string,
    text: string,
    src: string,
}

export const Work = (props:WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt="" />
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href={"@"}>Demo</Link>
            <Link href={"@"}>Code</Link>
        </StyledWork>
    );
};
 const StyledWork=styled.div`
 background-color: bisque;
     max-width: 50%;
     height: 443px;
     width: 100%;
 `
const Image=styled.img`
    width: 100vh;
    height: 260px;
    object-fit: cover;
    
`
const Link=styled.a`
`
const Title=styled.h3`
       
`
const Text=styled.p`
       
`