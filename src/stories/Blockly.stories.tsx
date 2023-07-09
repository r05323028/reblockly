import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import BlocklyEditor from "../components/BlocklyEditor";

const toolbox = {
  kind: "flyoutToolbox",
  contents: [
    {
      kind: "block",
      type: "controls_if",
    },
  ],
};

const meta: Meta<typeof BlocklyEditor> = {
  component: BlocklyEditor,
};

export default meta;
type Story = StoryObj<typeof BlocklyEditor>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Base: Story = {
  render: () => (
    <BlocklyEditor
      toolbox={toolbox}
      renderer="zelos"
      trashcan
      zoom={{ controls: true }}
    />
  ),
};
