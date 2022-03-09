import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import { ContentHeader } from "../../components/ContentHeader";
import { HistoryFinanceCard } from "../../components/HistoryFinanceCard";
import { SelectInput } from "../../components/SelectInput";

import { months as listOfMonths } from '../../utils/months';
import { formatDate } from "../../utils/formatDate";
import { formatCurrency } from "../../utils/formatCurrency";

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

import { Container, Content, Filters } from "./styles";

type Data = {
  id: string;
  description: string;
  amountFormatted: string;
  frequency: string;
  dateFormatted: string;
  tagColor: string;
}

function List(): JSX.Element {
  const [data, setData] = useState<Data[]>([]);
  const [monthSelected, setMonthSelected] = useState(String(new Date().getMonth() + 1));
  const [yearSelected, setYearSelected] = useState(String(new Date().getFullYear()));
  const [selectedFrequency, setSelectFrequency] = useState(['recorrente', 'eventual']);

  function handleFrequencyClick(frequency: string) {
    const alreadySelected = selectedFrequency.findIndex(item => item === frequency);

    if(alreadySelected >= 0){
      const filtered = selectedFrequency.filter(item => item !== frequency);
      setSelectFrequency(filtered)
    } else {
      setSelectFrequency(prev => [...prev, frequency]);
    }
  }

  const { type } = useParams();

  const pageData = useMemo(() => {
    return type === 'entry-balance' ? {
      title: 'Entradas',
      lineColor: '#F7931B',
      listData: gains
    } : {
      title: 'Saídas',
      lineColor: '#E44C4E',
      listData: expenses
    };
  }, [type]);

  const { lineColor, listData, title } = pageData;

  useEffect(() => {
    const filteredPerDate = listData.filter(item => {
      const date = new Date(item.date);
      const month = String(date.getMonth() + 1);
      const year = String(date.getFullYear());

      return month === monthSelected && year === yearSelected && selectedFrequency.includes(item.frequency);
    });
    
    const formattedData = filteredPerDate.map(item => {
      return {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dateFormatted: formatDate(item.date),
        tagColor: item.frequency === 'recorrente' ? '#4e41f0' : '#e44c4e',
      }
    })

    setData(formattedData);
  }, [listData, monthSelected, yearSelected, selectedFrequency]);

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

    listData.forEach(item => {
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
    
  }, [listData]);


  return (
    <Container>
      <ContentHeader title={title} lineColor={lineColor}>
        <SelectInput  options={months} onChange={e => setMonthSelected(e.target.value)} defaultValue={monthSelected} />
        <SelectInput options={years} onChange={e => setYearSelected(e.target.value)} defaultValue={yearSelected}/>
      </ContentHeader>

      <Filters>
        <button
          type="button"
          className={`tag-filter ${selectedFrequency.includes('recorrente') && 'tag-active'}`}
          onClick={() => handleFrequencyClick('recorrente')}
        >
          Recorrentes
        </button>
        <button
          type="button"
          className={`tag-filter ${selectedFrequency.includes('eventual') && 'tag-active'}`}
          onClick={() => handleFrequencyClick('eventual')}
        >
          Eventuais
        </button>
      </Filters>

      <Content>
        {data.map(item => {
          return (
            <HistoryFinanceCard
              key={item.id}
              title={item.description}
              subtitle={item.dateFormatted}
              tagColor={item.tagColor}
              amount={item.amountFormatted}
            />
          );
        })}
      </Content>
    </Container>
  );
}

export { List };