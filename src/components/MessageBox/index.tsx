import { Container } from "./styles";

type MessageBoxProps = {
  title: string;
  description: string;
  footerText: string;
  icon: string;
}

function MessageBox({ description, footerText, icon, title }: MessageBoxProps): JSX.Element {
  return (
    <Container>
      <header>
        <h1>
          {title}
          <img src={icon} alt={title} />
        </h1>
        <p>{description}</p>
      </header>
      <footer>
          <span>{footerText}</span>
        </footer>
    </Container>
  );

}

export { MessageBox };