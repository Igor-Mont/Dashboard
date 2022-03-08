import { Container, Tag } from "./styles";

type HistoryFinanceCardProps = {
  tagColor: string;
  title: string;
  subtitle: string;
  amount: string;
}

function HistoryFinanceCard({ amount, subtitle, title, tagColor }: HistoryFinanceCardProps): JSX.Element {
  return (
    <Container>
      <Tag color={tagColor} />
      <div>
        <span>{title}</span>
        <small>{subtitle}</small>
      </div>
      <h3>{amount}</h3>
    </Container>
  );
}

export { HistoryFinanceCard };