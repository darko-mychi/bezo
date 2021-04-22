import React from "react";

export type ButtonElementProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export interface ButtonProps extends ButtonElementProps {
  loading?: boolean;
  loader?: React.Component | React.FC | JSX.Element | string;
  variant?: "rounded" | "outlined" | "raised" | "fab";
  color?:
    | "red"
    | "transparent"
    | "blue"
    | "green"
    | "teal"
    | "gold"
    | "purple"
    | "default";
  icon?: React.Component | React.FC | JSX.Element | string;
  iconPosition?: "left" | "right";
  loaderColor?: string;
  loaderSize?: number;
  disabled?: boolean;
}
