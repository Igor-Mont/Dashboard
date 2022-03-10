import { Container, Logo, Form, FormTitle } from './styles';
import logoImg from '../../assets/logo.svg';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

function SingIn(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext);

  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="Minha carteira" />
        <h2>Minha Carteira</h2>
      </Logo>

      <Form
        onSubmit={() => signIn(email, password)}
      >
        <FormTitle>
          Entrar
        </FormTitle>
        
        <Input
          type='email'
          placeholder='e-mail'
          required
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder='senha'
          required
          onChange={e => setPassword(e.target.value)}
        />
        <Button type='submit'>Acessar</Button>
      </Form>
    </Container>
  );
}

export { SingIn };
