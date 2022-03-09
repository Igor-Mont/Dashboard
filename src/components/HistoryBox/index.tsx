import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip, CartesianGrid } from 'recharts';
import { Container, ChartContainer, Header, Legend, LegendContainer } from './styles';

type HistoryBox = {
  data: {
    month: string;
    amountEntry: number;
    amountOutput: number;
  }[],
  lineColorAmountEntry: string;
  lineColorAmountOutput: string;
}

function HistoryBox({ data, lineColorAmountEntry, lineColorAmountOutput }: HistoryBox): JSX.Element {
  return (
    <Container>
      <Header>
        <h2>Histórico de saldo</h2>
        <LegendContainer>
        <Legend color={lineColorAmountEntry}>
            <div></div>
            <span>Entradas</span>
          </Legend>
          <Legend color={lineColorAmountOutput}>
            <div></div>
            <span>Saídas</span>
          </Legend>
        </LegendContainer>
      </Header>

      <ChartContainer>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray='3 3' stroke="#ececec" />
            <XAxis dataKey='month' stroke='#ececec' />
            <Tooltip />
            <Line
              type='monotone'
              dataKey='amountEntry'
              name='Entradas'
              stroke={lineColorAmountEntry}
              strokeWidth={5}
              dot={{ r: 5 }}
              activeDot={{ r: 8}}
            />
            <Line
              type='monotone'
              dataKey='amountOutput'
              name='Saídas'
              stroke={lineColorAmountOutput}
              strokeWidth={5}
              dot={{ r: 5 }}
              activeDot={{ r: 8}}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Container>
  );
}

export { HistoryBox };
