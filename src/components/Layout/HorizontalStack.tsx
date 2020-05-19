import * as React from "react";
import styled, { css } from "styled-components";

export enum VerticalAlignment {
  top = "top",
  bottom = "bottom",
  center = "center",
  spaceBetween = "spaceBetween",
  spaceEvenly = "spaceEvenly",
}

export enum VerticalItemAlignment {
  top = "top",
  bottom = "bottom",
  center = "center",
  stretch = "stretch",
  baseline = "baseline",
  lastBaseline = "last baseline",
}

export enum HorizontalAlignment {
  left = "left",
  right = "right",
  center = "center",
  spaceBetween = "spaceBetween",
  spaceEvenly = "spaceEvenly",
}

export enum HorizontalItemAlignment {
  left = "left",
  right = "right",
  center = "center",
  stretch = "stretch",
  baseline = "baseline",
  lastBaseline = "last baseline",
}

export type StackChildren = React.ReactElement | React.ReactElement[] | null;

export interface HorizontalStackProps {
  reversed?: boolean;
  wrapped?: boolean;
  verticalAlignment?: VerticalAlignment;
  verticalItemAlignment?: VerticalItemAlignment;
  horizontalAlignment?: HorizontalAlignment;
  horizontalItemAlignment?: HorizontalItemAlignment;
  gap?: string;
  itemsPerRow?: number;
  children: StackChildren;
}

const HorizontalStackItem = styled.div`
  > * {
    height: 100%;
    width: auto;
  }
`;

export const HorizontalStackStyle = styled.div`
  display: flex;

  > * {
    flex-shrink: 0;
    flex-grow: 0;
  }
`;

function getAlignContent(verticalAlignment?: VerticalAlignment) {
  if (!verticalAlignment) {
    return "unset";
  }
  switch (verticalAlignment) {
    case VerticalAlignment.top: {
      return "flex-start";
    }
    case VerticalAlignment.bottom: {
      return "flex-end";
    }
    case VerticalAlignment.center: {
      return "center";
    }
    case VerticalAlignment.spaceBetween: {
      return "space-between";
    }
    case VerticalAlignment.spaceEvenly: {
      return "space-evenly";
    }
  }
}

function getAlignItems(verticalItemAlignment?: VerticalItemAlignment) {
  if (!verticalItemAlignment) {
    return "unset";
  }
  switch (verticalItemAlignment) {
    case VerticalItemAlignment.top: {
      return "flex-start";
    }
    case VerticalItemAlignment.bottom: {
      return "flex-end";
    }
    case VerticalItemAlignment.center: {
      return "center";
    }
    case VerticalItemAlignment.stretch: {
      return "stretch";
    }
    case VerticalItemAlignment.baseline: {
      return "baseline";
    }
    case VerticalItemAlignment.lastBaseline: {
      return "last baseline";
    }
  }
}

function getJustifyContent(horizontalAlignment?: HorizontalAlignment) {
  if (!horizontalAlignment) {
    return "unset";
  }
  switch (horizontalAlignment) {
    case HorizontalAlignment.left: {
      return "flex-start";
    }
    case HorizontalAlignment.right: {
      return "flex-end";
    }
    case HorizontalAlignment.center: {
      return "center";
    }
    case HorizontalAlignment.spaceBetween: {
      return "space-between";
    }
    case HorizontalAlignment.spaceEvenly: {
      return "space-evenly";
    }
  }
}

function getJustifyItems(horizontalItemAlignment?: HorizontalItemAlignment) {
  if (!horizontalItemAlignment) {
    return "unset";
  }
  switch (horizontalItemAlignment) {
    case HorizontalItemAlignment.left: {
      return "flex-start";
    }
    case HorizontalItemAlignment.right: {
      return "flex-end";
    }
    case HorizontalItemAlignment.center: {
      return "center";
    }
    case HorizontalItemAlignment.stretch: {
      return "stretch";
    }
    case HorizontalItemAlignment.baseline: {
      return "baseline";
    }
    case HorizontalItemAlignment.lastBaseline: {
      return "last baseline";
    }
  }
}

function getHorizontalStackStyle({
  wrapped,
  reversed,
  verticalAlignment,
  verticalItemAlignment,
  horizontalAlignment,
  horizontalItemAlignment,
  gap,
  itemsPerRow,
}: HorizontalStackProps) {
  let gapCss = ``;

  if (gap) {
    gapCss = `
      margin: calc(${gap} / -2);
      > ${HorizontalStackItem} {
        padding: calc(${gap} / 2);
      }
    `;
  }

  let itemsCss = ``;
  if (itemsPerRow) {
    itemsCss = `
      > ${HorizontalStackItem} {
        width: calc(100% / ${itemsPerRow});
      }
    `;
  }
  return css`
    flex-wrap: ${wrapped ? "wrap" : "no-wrap"};
    flex-direction: ${reversed ? "row-reverse" : "row"};
    align-content: ${getAlignContent(verticalAlignment)};
    align-items: ${getAlignItems(verticalItemAlignment)};
    justify-content: ${getJustifyContent(horizontalAlignment)};
    justify-items: ${getJustifyItems(horizontalItemAlignment)};
    overflow: auto;

    ${gapCss}
    ${itemsCss}
  `;
}

function renderChildren(children: StackChildren) {
  return React.Children.map(children, (child) => {
    if (child === null) {
      return child;
    }
    return <HorizontalStackItem>{child}</HorizontalStackItem>;
  });
}

export const HorizontalStack: React.FC<HorizontalStackProps> = (
  props: HorizontalStackProps
) => {
  return (
    <HorizontalStackStyle css={getHorizontalStackStyle(props)}>
      {renderChildren(props.children)}
    </HorizontalStackStyle>
  );
};

HorizontalStack.displayName = "HorizontalStack";
