type Props = { number: number };

export default function Price({ number }: Props) {
   return <span className="font-bold">{`$ ${number.toFixed(2)}`}</span>;
}
