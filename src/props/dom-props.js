const domProps = node => {
  const props = {};
  if (node.domNode.hasAttribute("aria-hidden")) {
    props["aria-hidden"] = node.domNode.getAttribute("aria-hidden");
  }

  if (
    !(
      node.domNode.offsetWidth ||
      node.domNode.offsetHeight ||
      node.domNode.getClientRects().length
    )
  ) {
    props.hidden = true;
  }

  if (!node.accNode.name && !node.accNode.role) {
    props.innerText = node.domNode.innerText;
  }

  return props;
};

export default domProps;
