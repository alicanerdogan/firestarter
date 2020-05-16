import * as React from "react";
import { twStyled } from "utils/styles";
import * as tw from "tailwind-in-js";
import { Overlay, Anchor, AnchorPosition } from "./Layout/Overlay";

export interface HelloProps {
  compiler: string;
  framework: string;
}

const Card = twStyled.div(
  tw.max_w_sm,
  tw.mx_auto,
  tw.rounded_lg,
  tw.flex,
  tw.justify_between,
  tw.px_6,
  tw.py_4,
  tw.mt_16
);

const Dot = twStyled.div(
  tw.block,
  tw.w_16,
  tw.h_16,
  tw.lg_w_32,
  tw.lg_h_32,
  tw.relative,
  tw.rounded_sm,
  tw.bg_blue_800
);
const DotTip = twStyled.div(
  tw.block,
  tw.w_8,
  tw.h_16,
  tw.rounded_sm,
  tw.bg_red_500
);

const AnchorCard = ({
  hostAnchorPosition,
  contentAnchorPosition,
}: {
  hostAnchorPosition: AnchorPosition;
  contentAnchorPosition: AnchorPosition;
}) => {
  return (
    <Card>
      <ul style={{ marginRight: "24px", display: "block" }}>
        <li>{hostAnchorPosition}</li>
        <li>{contentAnchorPosition}</li>
      </ul>
      <Dot>
        <Overlay>
          <Anchor
            hostAnchorPosition={hostAnchorPosition}
            contentAnchorPosition={contentAnchorPosition}
          >
            <DotTip />
          </Anchor>
        </Overlay>
      </Dot>
    </Card>
  );
};

export class Hello extends React.Component<HelloProps, {}> {
  render() {
    return (
      <>
        <AnchorCard
          hostAnchorPosition="top-center"
          contentAnchorPosition="bottom-left"
        />
        <AnchorCard
          hostAnchorPosition="top-center"
          contentAnchorPosition="bottom-center"
        />
        <AnchorCard
          hostAnchorPosition="top-center"
          contentAnchorPosition="bottom-right"
        />
        <AnchorCard
          hostAnchorPosition="top-center"
          contentAnchorPosition="top-left"
        />
        <AnchorCard
          hostAnchorPosition="top-center"
          contentAnchorPosition="top-center"
        />
        <AnchorCard
          hostAnchorPosition="top-center"
          contentAnchorPosition="top-right"
        />
        <AnchorCard
          hostAnchorPosition="top-center"
          contentAnchorPosition="center"
        />
        <AnchorCard
          hostAnchorPosition="top-center"
          contentAnchorPosition="left-top"
        />
        <AnchorCard
          hostAnchorPosition="top-center"
          contentAnchorPosition="left-center"
        />
        <AnchorCard
          hostAnchorPosition="top-center"
          contentAnchorPosition="left-bottom"
        />
        <AnchorCard
          hostAnchorPosition="top-center"
          contentAnchorPosition="right-top"
        />
        <AnchorCard
          hostAnchorPosition="top-center"
          contentAnchorPosition="right-center"
        />
        <AnchorCard
          hostAnchorPosition="top-center"
          contentAnchorPosition="right-bottom"
        />
      </>
    );
  }
}
