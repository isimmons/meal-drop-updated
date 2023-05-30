type Props = {
  rating?: number;
};

export const Review = ({ rating }: Props) => <div>I rate this Foo! {rating}</div>;
