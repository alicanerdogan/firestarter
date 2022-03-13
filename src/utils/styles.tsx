import React, { ReactHTML } from "react";

type TClassArg =
  | string
  | number
  | undefined
  | null
  | false
  | Record<string, any>;

type TCXArgs = (TClassArg | TClassArg[])[];

function cx(...args: TCXArgs): string {
  const classes = [];

  for (const arg of args) {
    if (!arg) continue;

    const argType = typeof arg;

    if (argType === "string" || argType === "number") {
      classes.push(arg);
      continue;
    }

    if (Array.isArray(arg) && arg.length > 0) {
      const inner = cx(arg);
      if (inner) {
        classes.push(inner);
      }
      continue;
    }

    Object.entries(arg)
      .filter(([, value]) => !!value)
      .forEach(([key]) => classes.push(key));
  }

  return classes.join(" ").trimEnd().trimStart();
}

export type TailwindClasses = TCXArgs;

type TVariantFn<TVariant extends {}> = (
  variant: TVariant | undefined
) => TailwindClasses;

export function styled<TVariant extends {}>(type: keyof ReactHTML | "input") {
  type P = keyof ReactHTML | "input";
  type PropsType = { variant?: Partial<TVariant> } & (P extends "input"
    ? React.InputHTMLAttributes<HTMLInputElement>
    : React.HTMLAttributes<P>) &
    React.ClassAttributes<P>;

  return (classes: string, fn?: TVariantFn<Partial<TVariant>>) => {
    const ReturnedComponent = React.forwardRef(
      ({ variant, ...props }: PropsType, ref: any) => {
        const dynamicClasses = fn ? fn(variant) : [];
        const className = cx(classes, ...dynamicClasses);
        return React.createElement(type, { ...props, className, ref });
      }
    );

    (ReturnedComponent as any).__styles = { classes, fn };

    return ReturnedComponent as any as React.FC<PropsType> & {
      __styles: { classes: string; fn?: TVariantFn<TVariant> };
    };
  };
}

export function extend<TVariant extends {}>(
  Component: React.FC<any> & {
    __styles: {
      classes: string;
      fn?: TVariantFn<TVariant> | undefined;
    };
  },
  type: keyof ReactHTML | "input"
) {
  const {
    __styles: { classes: baseClasses, fn: baseFn },
  } = Component;
  function Styled<TNewVariant extends TVariant>(
    classes: string,
    fn?: TVariantFn<TNewVariant>
  ) {
    const newClasses = `${baseClasses} ${classes}`;
    let newFn: TVariantFn<TNewVariant> | undefined = fn;
    if (baseFn) {
      if (fn) {
        newFn = (variant: TNewVariant | undefined) => {
          return [...baseFn(variant), ...fn(variant)];
        };
      } else {
        newFn = baseFn;
      }
    }
    return styled<TNewVariant>(type)(newClasses, newFn as any);
  }

  return Styled;
}
