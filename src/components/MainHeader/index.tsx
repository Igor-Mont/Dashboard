import { useMemo } from 'react';
import { Container, Profile } from './styles';
import { emojis } from '../../utils/emojis';

import { ToggleTheme } from '../ToggleTheme';

function MainHeader(): JSX.Element {
  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojis.length);

    return emojis[index]
  }, []);

  return (
    <Container>
      <ToggleTheme />

      <Profile>
        <h3>Olá, { emoji } </h3>
        <span>Igor Monteiro</span>
      </Profile>
    </Container>
  );
}

export { MainHeader };
