import { Dispatch, ReactNode, SetStateAction } from 'react';
import defaultTWCss from '../../styles/theme';
import { NavLink } from 'react-router-dom';

type PropsItem = {
  title: string;
  to: string;
  collapsed: boolean;
  icon: ReactNode;
  selected?: string;
  setSelected: Dispatch<SetStateAction<string>>;
};

export const MItem: React.FC<PropsItem> = ({
  title,
  icon,
  to,
  selected,
  collapsed,
  setSelected,
}: PropsItem) => {
  return (
    <div
      className={
        selected === title
          ? 'w-full rounded-lg-sm my-4 py-2 ' + defaultTWCss.bgSelected
          : 'w-full rounded-lg my-4 py-2 '
      }
      onClick={() => setSelected(title)}
    >
      <NavLink
        to={to}
        className={
          collapsed
            ? 'flex w-full ml-0 justify-center'
            : 'flex w-full ml-4 justify-start'
        }
      >
        {icon}
        {!collapsed && (
          <span className={`ml-2 text-sm hover:font-bold`}>{title}</span>
        )}
      </NavLink>
    </div>
  );
};
type Props = {
  children: string;
};

export const ItemsGroupTitle: React.FC<Props> = ({ children }: Props) => {
  return (
    <h6
      className={
        'flex justify-start mx-2 mb-2 mt-4 text-xs' + defaultTWCss.textColor
      }
    >
      {children}
    </h6>
  );
};
