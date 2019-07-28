import { isNodeFocusable } from "../utils/node-utils";

const focusProps = node => {
  const tabIndex = node.domNode.getAttribute("tabindex");
  const focusable = isNodeFocusable(node.domNode);

  return {
    focusable,
    tabbable: focusable && tabIndex != -1
  };
};

export default focusProps;
