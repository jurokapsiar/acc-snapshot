export default class AOMModel {
  constructor() {
    this.firstChild = null;
    this.nextSibling = null;
    this.accNodePromise = null;
    this.accNode = null;
    this.domNode = null;
    this.name = null;
    this.offset = 0;
    this.promisses = [];
  }

  processDOM(node) {

    if (!window.getComputedAccessibleNode) {
      throw "acc-snapshot requires AOM to be enabled. See http://wicg.github.io/aom/caniuse.html for instructions."
    }

    this.domNode = node;
    if (node.nodeType === 1) {
      this.accNodePromise = window
        .getComputedAccessibleNode(node)
        .then(accNode => (this.accNode = accNode));
      this.promisses.push(this.accNodePromise);
    }

    if (node.firstChild) {
      this.firstChild = new AOMModel();
      const promisses = this.firstChild.processDOM(node.firstChild);
      this.promisses.push(promisses);
    }

    if (node.nextSibling) {
      this.nextSibling = new AOMModel();
      const promisses = this.nextSibling.processDOM(node.nextSibling);
      this.promisses.push(promisses);
    }

    return this.promisses;
  }
}
