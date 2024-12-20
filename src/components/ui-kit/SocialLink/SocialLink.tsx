import React from 'react';
import classNames from 'classnames';

import FBIcon from '../../../assets/svg/fb.svg?react';
import IGIcon from '../../../assets/svg/ig.svg?react';
import LinkArrow from '../../../assets/svg/linkArrow.svg?react';
import { EnumSocials } from '../../../types/components.types';

import styles from './SocialLink.module.scss';

interface ISocialLinkProps {
    className?: string;
    link?: string;
    type: EnumSocials;
}

const SocialLink: React.FC<ISocialLinkProps> = (props: ISocialLinkProps) => {
    const { link, type, className } = props;

    const typeToIcon = {
        [EnumSocials.ig]: IGIcon,
        [EnumSocials.fb]: FBIcon,
    };

    const Icon = typeToIcon[type];

    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={classNames(styles.SocialLink, className)}
        >
            <Icon className={styles.icon} />
            <span>{`Live on ${type}`}</span>
            <LinkArrow />
        </a>
    );
};

export default SocialLink;
