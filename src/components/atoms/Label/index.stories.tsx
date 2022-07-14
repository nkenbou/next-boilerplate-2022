import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Label } from "./index";

export default {
  title: "atoms/Label",
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.storyName = "デフォルト";
Default.args = {
  name: "aiueo",
};
