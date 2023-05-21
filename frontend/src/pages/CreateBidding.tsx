import DefaultLayout from '../components/layout/DefaultLayout';
import CreateBidding from '../containers/bidding/CreateBidding';

export const CreateBiddingPage: React.FC = () => {
  return (
    <DefaultLayout>
      <CreateBidding />
    </DefaultLayout>
  );
};
