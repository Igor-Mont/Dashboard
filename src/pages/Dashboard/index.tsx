import { ContentHeader } from "../../components/ContentHeader";
import { Container, Content } from "./styles";
import { SelectInput } from "../../components/SelectInput";
import happyImg from '../../assets/happy.svg';
import grinningImg from '../../assets/grinning.svg';
import sadImg from '../../assets/sad.svg';
import { WalletBox } from '../../components/WalletBox';
import { useMemo, useState } from "react";
import { months as listOfMonths } from "../../utils/months";
import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import { MessageBox } from "../../components/MessageBox";

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

  const totalExpenses = useMemo(() => {
    let total: number = 0;

    expenses.forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount)
        } catch {
          throw new Error("Invalid amount! Amount must be number");
        }
      }
    });

    return total;
  }, [monthSelected, yearSelected]);

  const totalGains = useMemo(() => {
    let total: number = 0;

    gains.forEach(item => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if (month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount)
        } catch {
          throw new Error("Invalid amount! Amount must be number");
        }
      }
    });
    
    return total;
  }, [monthSelected, yearSelected]);

  const totalBalance = useMemo(() => totalGains - totalExpenses, [totalGains, totalExpenses]);

  const message = useMemo(() => {
    if(totalBalance < 0) {
      return {
        title: "Que Triste!",
        description: 'Neste mês, você gastou mais do que deveria.',
        icon: sadImg,
        footerText: "Verifique seus gastos!",
      }
    }
    else if(totalBalance === 0) {
      return {
        title: "Ufa!",
        description: 'Neste mês, você gastou exatamente o que ganhou.',
        icon: grinningImg,
        footerText: "Cuidado com os gastos!",
      }
    }
    else {
      return {
        title: "Muito bem!",
        description: 'Sua carteira está positiva',
        icon: happyImg,
        footerText: "Continue assim. Considere investir o seu saldo.",
      };
    }
  }, [totalBalance]);

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#F7931B">
        <SelectInput  options={months} onChange={e => setMonthSelected(Number(e.target.value))} defaultValue={monthSelected} />
        <SelectInput options={years} onChange={e => setYearSelected(Number(e.target.value))} defaultValue={yearSelected}/>
      </ContentHeader>
      <Content>
        <WalletBox 
          title="saldo"
          amount={totalBalance}
          footerLabel="atualizado com base nas entradas e saídas"
          icon="dollar"
          color="#4e41f0"
        />
        <WalletBox 
          title="entradas"
          amount={totalGains}
          footerLabel="atualizado com base nas entradas e saídas"
          icon="arrowUp"
          color="#f7931b"
        />
        <WalletBox 
          title="saídas"
          amount={totalExpenses}
          footerLabel="atualizado com base nas entradas e saídas"
          icon="arrowDown"
          color="#e44c4e"
        />
        <MessageBox
          title={message?.title}
          description={message?.description}
          icon={message?.icon}
          footerText={message?.footerText}
        />
      </Content>
    </Container>
  );
}

export { Dashboard }