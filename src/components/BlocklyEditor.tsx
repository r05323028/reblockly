import React, { useEffect, useRef } from "react";
import * as Blockly from "blockly";
import styles from "./BlocklyEditor.module.css";

export type BlocklyEditorProps = Blockly.BlocklyOptions & {};

const BlocklyEditor = (props: BlocklyEditorProps) => {
  const blocklyDiv = useRef();
  const workspace = useRef<Blockly.WorkspaceSvg>();

  useEffect(() => {
    if (blocklyDiv.current) {
      workspace.current = Blockly.inject(blocklyDiv.current, {
        ...props,
      });
    }
  }, [blocklyDiv]);

  useEffect(() => {
    if (workspace.current) {
      workspace.current.resizeContents();
    }
  }, [workspace]);

  return <div className={styles.blocklyDiv} ref={blocklyDiv}></div>;
};

export default BlocklyEditor;
