'use client';

const SOCIAL_ICONS = {
    facebook: 'fab fa-facebook-f',
    twitter: 'fab fa-twitter',
    linkedin: 'fab fa-linkedin-in',
    instagram: 'fab fa-instagram',
    pinterest: 'fab fa-pinterest-p',
    youtube: 'fab fa-youtube',
    github: 'fab fa-github',
    behance: 'fab fa-behance',
    dribbble: 'fab fa-dribbble',
    medium: 'fab fa-medium',
    x: 'fab fa-twitter'
};

const SocialIcon = ({ name }) => {
    const lowercaseName = name?.toLowerCase();
    const className = SOCIAL_ICONS[lowercaseName] || '';

    return <i className={className}></i>;
};

export default SocialIcon;