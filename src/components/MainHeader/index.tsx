import { useContext, useMemo, useState } from 'react';
import { Container, Profile } from './styles';
import { emojis } from '../../utils/emojis';

import { ToggleTheme } from '../ToggleTheme';
import { ThemeSwitcherContext } from '../../contexts/ThemeSwitcherContext';

function MainHeader(): JSX.Element {
  const { theme, toggleTheme } = useContext(ThemeSwitcherContext);

  const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false)

  function handleChangeTheme() {
    setDarkTheme(!darkTheme);
    toggleTheme();
  }

  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojis.length);

    return emojis[index]
  }, []);

  console.log(theme.title)

  return (
    <Container>
      <ToggleTheme
        labelLeft='Light'
        labelRight='Dark'
        onChange={handleChangeTheme}
        checked={darkTheme}
      />

      <Profile>
        <h3>Olá, { emoji } </h3>
        <span>Igor Monteiro</span>
      </Profile>
    </Container>
  );
}

export { MainHeader };
