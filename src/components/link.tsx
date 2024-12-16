import { ReactNode } from "react";
import styled from "styled-components";

export const Link = styled.a<{ color: string; children?: ReactNode }>`
  color: ${(props) => props.color};
  font-family: "Fira Sans";
  font-size: calc(18 * var(--dv));
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`;
