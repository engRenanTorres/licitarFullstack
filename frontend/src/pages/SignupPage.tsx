import { Signup } from '../containers/users/Signup';
import SimplePageLayout from '../components/layout/SimpleLayout';

export const SignupPage: React.FC = () => {
  return (
    <SimplePageLayout title="Novo por aqui?">
      <Signup />
    </SimplePageLayout>
  );
};
