import DefaultLayout from '../components/layout/DefaultLayout';
import QuestionList from '../containers/questions/QuestionList';

export const QuestionsListPage: React.FC = () => {
  return (
    <DefaultLayout>
      <QuestionList />
    </DefaultLayout>
  );
};
