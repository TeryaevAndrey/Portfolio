import React, { FC } from 'react';
import Burger from './Burger';
import MenuMob from './MenuMob/MenuMob';

const Header: FC = () => {
    return (
        <header className="py-8 md:py-5">
            <div className="container-app">
                <div className="flex justify-between items-center">
                    <Burger />
                    <MenuMob />
                </div>
            </div>
        </header>
    );
};

export default Header;