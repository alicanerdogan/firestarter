import * as React from "react";
import { twStyled, twCss } from "utils/styles";
import * as tw from "tailwind-in-js";

export interface HelloProps {
  compiler: string;
  framework: string;
}

const Card = twStyled.div(
  tw.max_w_sm,
  tw.mx_auto,
  tw.bg_white,
  tw.shadow_md,
  tw.rounded_lg,
  tw.sm_flex,
  tw.sm_items_center,
  tw.px_6,
  tw.py_4
);
const Image = twStyled.img(
  tw.block,
  tw.mx_auto,
  tw.sm_mx_0,
  tw.sm_flex_shrink_0,
  tw.h_16,
  tw.sm_h_24,
  tw.rounded_full
);
const TextContent = twStyled.div(
  tw.mt_4,
  tw.sm_mt_0,
  tw.sm_ml_4,
  tw.text_center,
  tw.sm_text_left
);
const Title = twStyled.p(tw.text_sm, tw.leading_tight, tw.text_gray_600);
const Button = twStyled.button(
  tw.text_purple_500,
  tw.hover_text_white,
  tw.hover_bg_purple_500,
  tw.border,
  tw.border_purple_500,
  tw.text_xs,
  tw.font_semibold,
  tw.rounded_full,
  tw.px_4,
  tw.py_1,
  tw.leading_normal,
  tw.mt_4
);

export class Hello extends React.Component<HelloProps, {}> {
  render() {
    return (
      <Card>
        <Image
          src="https://randomuser.me/api/portraits/women/17.jpg"
          alt="Profile Picture"
        />
        <TextContent>
          <p css={twCss(tw.text_xl, tw.leading_tight)}>{"Erin Linford"}</p>
          <Title>{"Customer Support Specialist"}</Title>
          <Button>{"Message"}</Button>
        </TextContent>
      </Card>
    );
  }
}
