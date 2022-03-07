import { Container, TitleContainer, Controllers } from "./styles";
import { ReactNode } from "react";

type ContentHeaderProps = {
  title: string;
  lineColor: string;
  children: ReactNode;
}

function ContentHeader({ title, lineColor, children }: ContentHeaderProps ): JSX.Element {
  return (
    <Container>
      <TitleContainer lineColor={lineColor}>
        <h1>{title}</h1>
      </TitleContainer>
      <Controllers>
        {children}
      </Controllers>
    </Container>
  );

}

export { ContentHeader };