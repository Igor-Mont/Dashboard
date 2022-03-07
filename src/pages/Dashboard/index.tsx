import { ContentHeader } from "../../components/ContentHeader";
import { Container } from "./styles";
import { SelectInput } from "../../components/SelectInput";


function Dashboard(): JSX.Element {
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
      <ContentHeader title="Dashboard" lineColor="#F7931B">
        <SelectInput options={optionsTest}/>
      </ContentHeader>
    </Container>
  );
}

export { Dashboard }