import { ClassNames, keyframes } from '@emotion/react';
import React, { ReactElement } from 'react';
import { useInView } from 'react-intersection-observer';

export type Orientation = 'left' | 'right' | 'up' | 'down';

type FadeInProps = {
  orientation?: Orientation;
  delay?: number;
  children: ReactElement;
};

export const FadeIn = ({
  orientation = 'left',
  delay = 0,
  children,
}: FadeInProps): ReactElement => {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
  });

  return (
    <ClassNames>
      {({ css, cx }) => {
        const markup = css`
          opacity: 0;
          animation: ${fadeIn(orientation)} 0.2s ease-in-out ${delay}s forwards;
        `;

        return (
          <div ref={ref} className={inView ? markup : undefined}>
            {children}
          </div>
        );
      }}
    </ClassNames>
  );
};

const fadeIn = (orientation: Orientation): string => {
  return keyframes`
    from {
        opacity:0;
        transform: ${getTransform(orientation)};
    }
    to {
        opacity:1;
        transform: translatex(0);
    }
`;
};

const getTransform = (orientation: Orientation) => {
  switch (orientation) {
    case 'left':
      return 'translatex(-10px)';
    case 'right':
      return 'translatex(10px)';
    case 'up':
      return 'translatey(10px)';
    case 'down':
      return 'translatey(-10px)';
  }
};