import { Container, Tag } from "./styles";

type HistoryFinanceCardProps = {
  cardColor: string;
  tagColor: string;
  title: string;
  subtitle: string;
  amount: string;
}

function HistoryFinanceCard({ amount, cardColor, subtitle, title, tagColor }: HistoryFinanceCardProps): JSX.Element {
  return (
    <Container color={cardColor}>
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