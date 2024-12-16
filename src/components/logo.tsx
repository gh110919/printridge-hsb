import styled from "styled-components";

export const Logo = styled.p<{ color: string }>`
  color: ${(props) => props.color};
  font-family: "Fira Sans";
  font-size: calc(30 * var(--dv));
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
`;
