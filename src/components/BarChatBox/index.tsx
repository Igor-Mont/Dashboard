import { Container, SideLeft, SideRight, LegendContainer, Legend } from "./styles";
import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from 'recharts';
import { ReactText } from "react";
import { formatCurrency } from "../../utils/formatCurrency";

type BarChatBoxProps = {
  title: string;
  data: {
    name: string;
    amount: number;
    percent: number;
    color: string;
  }[];
}

function BarChatBox({ data, title }: BarChatBoxProps): JSX.Element {
  return (
    <Container>
      <SideLeft>
        <h2>{title}</h2>
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
          <BarChart data={data}>
            <Bar dataKey='amount' name="Valor">
              {data.map(indicator => {
                return (
                  <Cell
                    key={indicator.name}
                    fill={indicator.color}
                  />
                )
              })}
            </Bar>
            <Tooltip 
              cursor={{ fill: 'none' }}
              formatter={(value: string | Number | ReactText) => formatCurrency(Number(value))} 
            />
          </BarChart>
        </ResponsiveContainer>
      </SideRight>
    </Container>
  );
}

export { BarChatBox };