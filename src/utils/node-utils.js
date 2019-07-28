const focusableTagNames = ["input", "button", "a", "select", "textarea"];

export const isNodeDisabled = node =>
  node.hasAttribute("disabled") &&
  node.getAttribute("disabled") !== false;

export const isNodeFocusable = node => {
  const disabled = isNodeDisabled(node);
  return (
    !disabled &&
    (focusableTagNames.includes(node.tagName.toLowerCase()) ||
      node.hasAttribute("tabindex"))
  );
};
