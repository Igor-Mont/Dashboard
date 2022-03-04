import styled from "styled-components";
import Switch, { ReactSwitchProps } from 'react-switch';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const ToggleLabel = styled.span`
  color: ${props => props.theme.colors.white};
`;

const Toggle = styled(Switch).attrs<ReactSwitchProps>(
  ({ theme }) => ({
    onColor: theme.colors.info,
    offColor: theme.colors.warning

 }))
  <ReactSwitchProps>`
    margin: 0 0.5rem;
 `;

export { Container, ToggleLabel, Toggle };