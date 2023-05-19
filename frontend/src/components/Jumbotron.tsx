type Props = {
  title: string;
  subtitle?: string;
};

const Jumbotron: React.FC<Props> = ({ title, subtitle }: Props) => {
  return (
    <div className="rounded-lg text-neutral-100 m-5 mb-10 px-5 py-10 bg-gradient-to-t from-emerald-900 to-emerald-400 dark:bg-gradient-to-t dark:from-purple-800 dark:to-purple-400">
      <h1 className="text-3xl italic">{title}</h1>
      <p className="jumbotron-subtitle">{subtitle}</p>
    </div>
  );
};

export default Jumbotron;
