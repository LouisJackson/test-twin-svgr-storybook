import React from "react";
import { Story } from "@storybook/react/types-6-0";
import Icon from "./Icon";

export default {
  title: "Icon",
  component: Icon,
};

export const Default: Story = (props = { variant: "arrow-right" }) => (
  <Icon {...props} tw="fill-black stroke-black" />
);
