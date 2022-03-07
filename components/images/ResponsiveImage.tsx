import cN from 'classnames';
import Image from 'next/image';
import { ReactElement } from 'react';
import s from './style.module.scss';

type ResponsiveImageProps = {
  path: string;
  alt: string;
  link?: string;
};

const handleClick = (link: string) => {
  window.open(link, '_blank');
};

export const ResponsiveImage = ({
  path,
  alt,
  link,
}: ResponsiveImageProps): ReactElement => {
  return (
    <img
      className={cN(s.image, { [s.isLink]: !!link })}
      src={path}
      alt={alt}
      onClick={() => {
        if (link) handleClick(link);
      }}
    />
  );
};
