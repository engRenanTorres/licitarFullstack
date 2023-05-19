import { ReactNode } from 'react';
import logoImg from '../../assets/favicon.svg';
import defaultTWCss from '../../styles/theme';

type Props = {
  title?: string;
  children: ReactNode;
};

const CardContent: React.FC<Props> = ({ title, children }: Props) => {
  return (
    <div
      role="main"
      className={
        'text-gray-900 h-screen flex items-center justify-center ' +
        defaultTWCss.textColor
      }
    >
      <section className="w-96">
        <div className="bg-neutral-200 rounded-lg min-w-[80%] dark:bg-indigo-950">
          <div className=" min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                className="mx-auto h-28 w-auto"
                src={logoImg}
                alt="Your Company"
              />
              <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight">
                {title}
              </h2>
            </div>
            {children}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardContent;
