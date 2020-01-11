import * as React from "react";
import { styled } from "linaria/react";
import { media } from "utils/styleHelpers";

export interface HelloProps {
  compiler: string;
  framework: string;
}

const Header = styled.h1`
  font-size: 24px;
  ${media.sm`
    font-size: 12px;
  `}
  ${media.md`
    font-size: 16px;
  `}
  ${media.lg`
    font-size: 20px;
  `}
  ${media.xl`
    font-size: 48px;
  `}
`;

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
  render() {
    return (
      <Header>
        Hello from {this.props.compiler} and {this.props.framework}!
      </Header>
    );
  }
}
