import { ContentHeader } from "../../components/ContentHeader";
import { Container } from "./styles";
import { SelectInput } from "../../components/SelectInput";
import { useMemo, useState } from "react";
import { months as listOfMonths } from "../../utils/months";
import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

function Dashboard(): JSX.Element {
  const [monthSelected, setMonthSelected] = useState(Number(new Date().getMonth() + 1));
  const [yearSelected, setYearSelected] = useState(Number(new Date().getFullYear()));

  const months = useMemo(() => {

    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      }
    })
  }, []);

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    [...expenses, ...gains].forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });

    return uniqueYears.map(year => {

      return {
        value: year,
        label: year,
      }
    });
    
  }, []);


  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#F7931B">
        <SelectInput  options={months} onChange={e => setMonthSelected(Number(e.target.value))} defaultValue={monthSelected} />
        <SelectInput options={years} onChange={e => setYearSelected(Number(e.target.value))} defaultValue={yearSelected}/>
      </ContentHeader>
    </Container>
  );
}

export { Dashboard }