interface Bidding {
  id?: string;
  name: string;
  value: number;
}

const BiddingListItem: React.FC<Bidding> = ({ value: offer, name }: Bidding) => {
  return (
    <div className="flex lg:flex-1 gap-1">
      <aside className="pr-2">{name}:</aside>
      <div>R$ {offer}</div>
    </div>
  );
};

export default BiddingListItem;
