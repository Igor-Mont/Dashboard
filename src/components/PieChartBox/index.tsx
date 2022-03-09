import { Container, SideLeft, Legend, LegendContainer, SideRight } from "./styles";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

type PieChartProps = {
  data: {
    name: string;
    value: number;
    percent: number;
    color: string;
  }[];
}

function PieChartBox({ data }: PieChartProps): JSX.Element {
  return (
    <Container>
      <SideLeft>
        <h2>Relação</h2>
        <LegendContainer>
          {data.map(indicator => {
            return (
              <Legend key={indicator.name} color={indicator.color}>
                <div>{indicator.percent}%</div>
                <span>{indicator.name}</span>
              </Legend>
            );
          })}
        </LegendContainer>
      </SideLeft>
      <SideRight>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              labelLine={false}
              dataKey='percent'
            >
              {
                data.map(indicator => {
                  return (
                    <Cell key={indicator.name} fill={indicator.color} />
                  );
                })
              }
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </SideRight>
    </Container>
  );
}

export { PieChartBox };