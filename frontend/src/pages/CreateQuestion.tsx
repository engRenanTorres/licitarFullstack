import DefaultLayout from '../components/layout/DefaultLayout';
import CreateQuestion from '../containers/questions/CreateQuestion';

export const CreateQuestionPage: React.FC = () => {
  return (
    <DefaultLayout>
      <CreateQuestion />
    </DefaultLayout>
  );
};
