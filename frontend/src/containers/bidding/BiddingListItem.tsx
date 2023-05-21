interface Bidding {
  id: number;
  name: string;
  offer: number;
}

const BiddingListItem: React.FC<Bidding> = ({
  offer,
  name,
}: Bidding) => {
  return (
    <div className="flex lg:flex-1 gap-1">
      <aside className="pr-2">{name}:</aside>
      <div>R$ {offer}</div>
    </div>
  );
};

export default BiddingListItem;
