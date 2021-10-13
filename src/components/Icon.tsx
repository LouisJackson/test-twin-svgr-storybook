import React from "react";
import tw, { TwStyle } from "twin.macro";
import ArrowRightIcon from "../assets/arrow-right.svg";

const IconVariants = {
  "arrow-right": ArrowRightIcon,
};

interface Props extends React.SVGAttributes<SVGElement> {
  variant?: keyof typeof IconVariants;
  // extraCss: string | TwStyle | TwStyle[];
}

const Icon: React.FC<Props> = ({ variant = "arrow-right" }) => {
  const IconComponent = IconVariants[variant];

  return <IconComponent tw="border" />;
};

export default Icon;
