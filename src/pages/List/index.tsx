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
    const response = listData.map(item => {
      return {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dataFormatted: formatDate(item.date),
        tagColor: item.frequency === 'recorrente' ?'#4e41f0' : '#e44c4e',
      }
    })

    setData(response);
  }, [listData]);


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
        <SelectInput options={months}/>
        <SelectInput options={years}/>
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