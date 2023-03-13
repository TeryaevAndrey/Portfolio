import React, { FC } from 'react';
import SocialsItem from './SocialsItem';

const Socials: FC = () => {
    return (
        <div className="flex items-center gap-4">
            <SocialsItem href="mailto:teryaev.2004@mail.ru" logo="/img/socials/mail.svg" alt="email" />
            <SocialsItem href="https://t.me/teryaev2004" logo="/img/socials/telegram.svg" alt="telegram" />
            <SocialsItem href="https://github.com/TeryaevAndrey" logo="/img/socials/github.svg" alt="github" />
        </div>
    );
};

export default Socials;