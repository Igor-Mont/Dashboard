import { ContentHeader } from "../../components/ContentHeader";
import { HistoryFinanceCard } from "../../components/HistoryFinanceCard";
import { SelectInput } from "../../components/SelectInput";
import { Container, Content } from "./styles";

function List(): JSX.Element {
  const optionsTest = [
    {
      value: 'Igor',
      label: 'Igor'
    },
    {
      value: 'Nathan',
      label: 'Nathan'
    },
    {
      value: 'Santos',
      label: 'Santos'
    },
  ];

  return (
    <Container>
      <ContentHeader title="Saídas" lineColor="#E44C4E">
        <SelectInput options={optionsTest}/>
      </ContentHeader>

      <Content>
        <HistoryFinanceCard
          title="Conta de luz"
          subtitle="27/07/2020"
          tagColor="#E44C4E"
          amount="R$ 130,00"
        />
      </Content>
    </Container>
  );
}

export { List };