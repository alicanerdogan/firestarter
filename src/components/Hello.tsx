import * as React from "react";
import { twStyled } from "utils/styles";
import {
  text_3xl,
  text_center,
  text_blue_500,
  italic,
  text_red_500
} from "tailwind-in-js";

export interface HelloProps {
  compiler: string;
  framework: string;
}

const Header = twStyled.h1(text_3xl, text_center, text_blue_500);
const Compiler = twStyled.span(italic, text_red_500);

export class Hello extends React.Component<HelloProps, {}> {
  render() {
    return (
      <Header>
        Hello from <Compiler>{this.props.compiler}</Compiler> and{" "}
        {this.props.framework}!
      </Header>
    );
  }
}
