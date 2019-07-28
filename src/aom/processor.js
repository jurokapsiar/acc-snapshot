import { isNodeFocusable } from "../utils/node-utils";

export default class AOMProcessor {
  constructor(reporter) {
    this.reporter = reporter;
  }

  processNode(node, offset) {
    let includeNode = false;
    if (node.accNode) {
      includeNode =
        (!!node.accNode.role && node.accNode.role !== "genericContainer") ||
        isNodeFocusable(node.domNode);

      if (includeNode) {
        node.offset = offset;
        this.reporter.reportNode(node);
      }
    }

    if (node.firstChild) {
      this.processNode(node.firstChild, offset + (includeNode ? 1 : 0));
    }
    if (node.nextSibling) {
      this.processNode(node.nextSibling, offset);
    }
  }
}
