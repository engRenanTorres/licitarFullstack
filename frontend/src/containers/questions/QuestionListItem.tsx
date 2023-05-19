interface Question {
  id: number;
  institute: string;
  year: number;
  question: string;
  profession: string;
  alternatives: string[];
  answer: string;
  tip: string;
}

const QuestionListItem: React.FC<Question> = ({
  question,
  institute,
}: Question) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-5 m-5">
      <div>{question}</div>
      <aside>{institute}</aside>
    </div>
  );
};

export default QuestionListItem;
