import { ReactNode } from 'react';
import Topbar from '../Topbar/Topbar';
import CardContent from './CardContent';
import defaultTWCss from '../../styles/theme';

interface Props {
  title?: string;
  children: ReactNode;
}

const SimplePageLayout: React.FC<Props> = ({ title, children }: Props) => {
  return (
    <div className={'h-fit ' + defaultTWCss.bgGradient}>
      <Topbar />
      <CardContent title={title}>{children}</CardContent>
    </div>
  );
};

export default SimplePageLayout;
