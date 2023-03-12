import React, { FC } from 'react';
import SocialsItem from './SocialsItem';

const Socials: FC = () => {
    return (
        <div className="flex items-center gap-4">
            <SocialsItem logo="/img/socials/mail.svg" alt="email" />
            <SocialsItem logo="/img/socials/telegram.svg" alt="telegram" />
            <SocialsItem logo="/img/socials/github.svg" alt="github" />
        </div>
    );
};

export default Socials;