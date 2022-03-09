import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { ContentHeader } from "../../components/ContentHeader";
import { HistoryFinanceCard } from "../../components/HistoryFinanceCard";
import { SelectInput } from "../../components/SelectInput";
import { Container, Content, Filters } from "./styles";

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import { formatCurrency } from "../../utils/formatCurrency";
import { formatDate } from "../../utils/formatDate";

type Data = {
  id: string;
  description: string;
  amountFormatted: string;
  frequency: string;
  dataFormatted: string;
  tagColor: string;
}

function List(): JSX.Element {
  const [data, setData] = useState<Data[]>([]);
  const [monthSelected, setMonthSelected] = useState(String(new Date().getMonth() + 1))
  const [yearSelected, setYearSelected] = useState(String(new Date().getFullYear()))

  const { type } = useParams();

  const title = useMemo(() => {
    return type === 'entry-balance' ? {
      title: 'Entradas',
      lineColor: '#F7931B'
    } : {
      title: 'Saídas',
      lineColor: '#E44C4E'
    };
  }, [type]);

  const listData = useMemo(() => {
    return type === 'entry-balance' ? gains : expenses;
  }, [type]);

  useEffect(() => {
    const filteredPerDate = listData.filter(item => {
      const date = new Date(item.date);
      const month = String(date.getMonth() + 1);
      const year = String(date.getFullYear());

      return month === monthSelected && year === yearSelected;
    });
    console.log('data', listData)
    console.log('mothSelected', monthSelected)
    console.log('yearSelected', yearSelected)
    console.log('per date', filteredPerDate)
    
    const formattedData = filteredPerDate.map(item => {
      return {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dataFormatted: formatDate(item.date),
        tagColor: item.frequency === 'recorrente' ? '#4e41f0' : '#e44c4e',
      }
    })

    setData(formattedData);
    console.log('formated', formattedData)
  }, [listData, monthSelected, yearSelected]);


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
      <ContentHeader title={title.title} lineColor={title.lineColor}>
        <SelectInput options={months} onChange={e => setMonthSelected(e.target.value)} defaultValue={monthSelected} />
        <SelectInput options={years} onChange={e => setYearSelected(e.target.value)} defaultValue={yearSelected}/>
      </ContentHeader>

      <Filters>
        <button type="button" className="tag-filter">Recorrentes</button>
        <button type="button" className="tag-filter">Eventuais</button>
      </Filters>

      <Content>
        {data.map(item => {
          return (
            <HistoryFinanceCard
              key={item.id}
              title={item.description}
              subtitle={item.dataFormatted}
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