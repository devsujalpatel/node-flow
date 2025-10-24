import { NodeProps } from "@xyflow/react";
import { memo } from "react";
import { BaseTriggerNode } from "../base-trigger-node";
import { MousePointerIcon } from "lucide-react";

export const ManualTriggerNode = memo((props: NodeProps) => {
  const handleOpenSettings = () => {};
  return (
    <>
      <BaseTriggerNode
        {...props}
        icon={MousePointerIcon}
        name="When clicking 'Execute workflow'"
        description=""
        //   status={nodeStatus} TODO
        onSettings={handleOpenSettings} // TODO
        onDoubleClick={handleOpenSettings} // TODO
      />
    </>
  );
});
