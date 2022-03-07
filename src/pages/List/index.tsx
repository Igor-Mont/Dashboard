import { ContentHeader } from "../../components/ContentHeader";
import { SelectInput } from "../../components/SelectInput";
import { Container } from "./styles";

function List(): JSX.Element {
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
      <ContentHeader title="Saídas" lineColor="#E44C4E">
        <SelectInput options={optionsTest}/>
      </ContentHeader>
    </Container>
  );
}

export { List };