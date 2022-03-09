import { ReactElement } from 'react';
import { getIncrementor } from '../../utils/getCounter';
import { FadeIn } from '../animation/FadeIn';
import { TextAnimation } from './TextAnimation';
import s from './style.module.scss';
import { ResponsiveImage } from '../images/ResponsiveImage';
import { getAssetURL } from '../../utils/getAssetURL';

export const Opener = (): ReactElement => {
  const getDelay = getIncrementor(0, 0.15);

  return (
    <div className={s.openerContainer}>
      <div className={s.flexContainer}>
        <div className={s.flexAnimation}>
          <FadeIn orientation="up" delay={getDelay()}>
            <TextAnimation />
          </FadeIn>
        </div>

        <div className={s.flexLogo}>
          <FadeIn orientation="up" delay={getDelay()}>
            <ResponsiveImage
              path={getAssetURL('6c028171-b13d-4315-9558-7e323b50c2be')}
              alt="Logo Demokratie für alle"
              link={'https://demokratie-fuer-alle.de'}
            />
          </FadeIn>
        </div>
      </div>
    </div>
  );
};
