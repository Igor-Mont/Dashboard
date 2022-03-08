import styled from "styled-components";

type TagProps = {
  color: string;
}

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0.75rem 0;
  padding: 0.75rem 0.7rem;

  list-style: none;
  border-radius: 0.5rem;
  background-color: ${props => props.theme.colors.tertiary};
  cursor: pointer;
  transition: all .3s;

  position: relative;

  &:hover {
    opacity: 0.7;
    transform: translateX(10px);
  }

  >div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding-left: 0.7rem;
  }
`;

const Tag = styled.div<TagProps>`
  position: absolute;
  left: 0;

  width: 10px;
  height: 60%;

  background-color: ${props => props.color};
`;

export { Container, Tag };