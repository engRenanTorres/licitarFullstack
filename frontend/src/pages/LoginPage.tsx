import Login from '../containers/users/Login';
import SimplePageLayout from '../components/layout/SimpleLayout';

export const LoginPage: React.FC = () => {
  return (
    <SimplePageLayout title="Bem vindo!">
      <Login />
    </SimplePageLayout>
  );
};
