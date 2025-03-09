import React from 'react';
import {Menu} from "../menu/Menu.tsx";
import {S} from '../HeaderMenuStyles.tsx'


export const MobileMenu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={false}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={false}>
                <Menu menuItems={props.menuItems}/>
            </S.MobileMenuPopup>

        </S.MobileMenu>
    );
};


