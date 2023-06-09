import { ReactNode } from 'react';
import Topbar from '../Topbar/Topbar';
import CardContent from './CardContent';
import defaultTWCss from '../../styles/theme';
import Sidebar from '../Sidebar/Sidebar';

interface Props {
  title?: string;
  children: ReactNode;
}

const BiddingLayout: React.FC<Props> = ({ title, children }: Props) => {
  return (
    <div className={'h-fit flex ' + defaultTWCss.bgGradient}>
      <Sidebar />
      <div id="top" className="flex-1">
        <Topbar />
        <CardContent logo={false} title={title} widthPercent={90}>
          {children}
        </CardContent>
      </div>
    </div>
  );
};

export default BiddingLayout;
