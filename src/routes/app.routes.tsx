import { Routes, Route} from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Dashboard } from '../pages/Dashboard';
import { List } from '../pages/List';

function AppRoutes(): JSX.Element {
  return (
    <Layout>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/list/:type" element={<List />} />
      </Routes>
    </Layout>
  );
}

export { AppRoutes };