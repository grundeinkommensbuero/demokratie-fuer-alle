import { ReactElement } from 'react';
import s from './style.module.scss';

export const TextAnimation = (): ReactElement => {
  return (
    <div id={s.container}>
      Demokratie
      <br />
      für
      <div id={s.flip}>
        <div>
          <div>Mich</div>
        </div>
        <div>
          <div>Dich</div>
        </div>
        <div>
          <div>ALLE !</div>
        </div>
      </div>
    </div>
  );
};
