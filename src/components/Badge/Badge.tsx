import styled, { css } from "styled-components";

const Container = styled.div(
  () => css`
    padding: 3px 8px;
    background: #e9e9e9;
    border-radius: 4px;
    display: inline-block;
    span {
      color: #636363;
    }
    span:first-letter {
      text-transform: capitalize;
    }
  `
);

type Props = {
  text: string;
  className?: string;
};

export const Badge = ({ text, className }: Props) => {
  return (
    <Container className={className}>
      <span>{text}</span>
    </Container>
  );
};
