import React from 'react';

import { ROUTES } from '@/utils/constants/constants';

import NavigationLink from './navigation-link';

interface IHeaderLinksProps {
  handleLinkClick: () => void;
}

const HeaderLinks = ({ handleLinkClick }: IHeaderLinksProps) => {
  return (
    <>
      <NavigationLink
        href={ROUTES.workSection}
        label="Work"
        onClick={handleLinkClick}
      />
      <NavigationLink
        href={ROUTES.aboutSection}
        label="About me"
        onClick={handleLinkClick}
      />
      <NavigationLink
        href="/files/resume.pdf"
        label="resume"
        onClick={handleLinkClick}
        target="_blank"
      />
    </>
  );
};

export default HeaderLinks;
