import styled, { keyframes } from "styled-components";

const animate = keyframes`
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  50% {
    opacity: .3;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

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
  animation: ${animate} 0.5s ease;

  &:hover {
    opacity: 0.7;
    transform: translateX(10px);
  }

  >div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding-left: 0.7rem;

    span {
      font-weight: bold;
      font-size: 1.3rem;
    }
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