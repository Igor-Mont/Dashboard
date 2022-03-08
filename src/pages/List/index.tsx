import { ContentHeader } from "../../components/ContentHeader";
import { HistoryFinanceCard } from "../../components/HistoryFinanceCard";
import { SelectInput } from "../../components/SelectInput";
import { Container, Content, Filters } from "./styles";

function List(): JSX.Element {
  const months = [
    {
      value: 7,
      label: 'Julho'
    },
    {
      value: 8,
      label: 'Agosto'
    },
    {
      value: 9,
      label: 'Setembro'
    },
  ];

  const years = [
    {
      value: 2020,
      label: 2020
    },
    {
      value: 2019,
      label: 2019
    },
    {
      value: 2018,
      label: 2018
    },
  ];

  return (
    <Container>
      <ContentHeader title="Saídas" lineColor="#E44C4E">
        <SelectInput options={months}/>
        <SelectInput options={years}/>
      </ContentHeader>

      <Filters>
        <button type="button" className="tag-filter">Recorrentes</button>
        <button type="button" className="tag-filter">Eventuais</button>
      </Filters>

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