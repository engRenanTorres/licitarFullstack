import { PlusCircleIcon } from '@heroicons/react/20/solid';
import TButton from '../../components/ui/TButton';
import { questions } from '../../services/auth/questions';
import QuestionListItem from './QuestionListItem';

const QuestionList: React.FC = () => {
  return (
    <div>
      <TButton color="emerald" to="create">
        <PlusCircleIcon className="h-6 w-6 mr-2" />
        Criar nova questão
      </TButton>
      {questions.map((question) => (
        <div key={question.id}>
          <QuestionListItem {...question} />
          <br />
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
