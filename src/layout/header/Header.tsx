import React from 'react';
import {Logo} from "../../components/logo/logo.tsx";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.ts";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu.tsx";
import {DesktopMenu} from "./headerMenu/DesktopMenu/DesktopMenu.tsx";
import {S} from './Header_Style.ts'

const items = ["Home", "Skills", "Works", "Testimony", "Contacts"]

export const Header = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    {width < breakpoint ? <MobileMenu menuItems={items}/>
                        : <DesktopMenu menuItems={items}/>}

                </FlexWrapper>
            </Container>
        </S.Header>
    );

};


