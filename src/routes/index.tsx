
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './app.routes';

function Routes(): JSX.Element {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export { Routes };
