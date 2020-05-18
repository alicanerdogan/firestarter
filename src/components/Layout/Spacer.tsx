import * as React from "react";
import * as tw from "tailwind-in-js";

import { twStyled, twCss } from "utils/styles";

export enum SpaceSize {
  _0 = 0,
  _1 = 1,
  _2 = 2,
  _3 = 3,
  _4 = 4,
  _5 = 5,
  _6 = 6,
  _8 = 8,
  _10 = 10,
  _12 = 12,
  _16 = 16,
  _20 = 20,
  _24 = 24,
  _32 = 32,
  _40 = 40,
  _48 = 48,
  _56 = 56,
  _64 = 64,
  px = "px",
}

export interface SpacerProps {
  size: SpaceSize;
}

function getCSSClassForWidth(size: SpaceSize) {
  switch (size) {
    case SpaceSize._0: {
      return tw.w_0;
    }
    case SpaceSize._1: {
      return tw.w_1;
    }
    case SpaceSize._2: {
      return tw.w_2;
    }
    case SpaceSize._3: {
      return tw.w_3;
    }
    case SpaceSize._4: {
      return tw.w_4;
    }
    case SpaceSize._5: {
      return tw.w_5;
    }
    case SpaceSize._6: {
      return tw.w_6;
    }
    case SpaceSize._8: {
      return tw.w_8;
    }
    case SpaceSize._10: {
      return tw.w_10;
    }
    case SpaceSize._12: {
      return tw.w_12;
    }
    case SpaceSize._16: {
      return tw.w_16;
    }
    case SpaceSize._20: {
      return tw.w_20;
    }
    case SpaceSize._24: {
      return tw.w_24;
    }
    case SpaceSize._32: {
      return tw.w_0;
    }
    case SpaceSize._40: {
      return tw.w_40;
    }
    case SpaceSize._48: {
      return tw.w_48;
    }
    case SpaceSize._56: {
      return tw.w_56;
    }
    case SpaceSize._64: {
      return tw.w_64;
    }
    case SpaceSize.px: {
      return tw.w_px;
    }
  }
}

const VerticalSpacerStyle = twStyled.div(tw.w_full);

export const VerticalSpacer: React.FC<SpacerProps> = ({ size }) => {
  return <VerticalSpacerStyle css={twCss(getCSSClassForWidth(size))} />;
};

function getCSSClassForHeight(size: SpaceSize) {
  switch (size) {
    case SpaceSize._0: {
      return tw.h_0;
    }
    case SpaceSize._1: {
      return tw.h_1;
    }
    case SpaceSize._2: {
      return tw.h_2;
    }
    case SpaceSize._3: {
      return tw.h_3;
    }
    case SpaceSize._4: {
      return tw.h_4;
    }
    case SpaceSize._5: {
      return tw.h_5;
    }
    case SpaceSize._6: {
      return tw.h_6;
    }
    case SpaceSize._8: {
      return tw.h_8;
    }
    case SpaceSize._10: {
      return tw.h_10;
    }
    case SpaceSize._12: {
      return tw.h_12;
    }
    case SpaceSize._16: {
      return tw.h_16;
    }
    case SpaceSize._20: {
      return tw.h_20;
    }
    case SpaceSize._24: {
      return tw.h_24;
    }
    case SpaceSize._32: {
      return tw.h_0;
    }
    case SpaceSize._40: {
      return tw.h_40;
    }
    case SpaceSize._48: {
      return tw.h_48;
    }
    case SpaceSize._56: {
      return tw.h_56;
    }
    case SpaceSize._64: {
      return tw.h_64;
    }
    case SpaceSize.px: {
      return tw.h_px;
    }
  }
}

const HorizontalSpacerStyle = twStyled.div(tw.h_full);

export const HorizontalSpacer: React.FC<SpacerProps> = ({ size }) => {
  return <HorizontalSpacerStyle css={twCss(getCSSClassForHeight(size))} />;
};
