import { Routes, Route} from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Dashboard } from '../pages/Dashboard';
import { List } from '../pages/List';
import { SingIn } from '../pages/SingIn';

function AuthRoutes(): JSX.Element {
  return (
      <Routes>
        <Route path="/" element={<SingIn />}/>
      </Routes>
  );
}

export { AuthRoutes };