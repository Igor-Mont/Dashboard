import { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

function Routes(): JSX.Element {
  const { logged } = useContext(AuthContext);

  return (
    <BrowserRouter>
      {logged ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
}

export { Routes };
