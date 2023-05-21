import BiddingLayout from '../components/layout/BiddingLayout';
import BiddingPlace from '../containers/bidding/BiddingPlace';

export const BiddingPage: React.FC = () => {
  return (
    <BiddingLayout>
      <BiddingPlace />
    </BiddingLayout>
  );
};
