const skipProps = [
  "name",
  "role",
  "posInSet",
  "setSize",
  "ensureUpToDate",
  "firstChild",
  "lastChild",
  "nextSibling",
  "previousSibling",
  "parent"
];

const addProps = (props, obj) => {
  for (let prop in obj) {
    if (!!obj[prop] && !skipProps.includes(prop) && obj[prop] !== "none") {
      props.push(`;${prop}=${obj[prop]}`);
    }
  }
};

export default class TextReporter {
  constructor(outputFn, additionalProps) {
    this.outputFn = outputFn;
    this.additionalProps = additionalProps;
  }

  reportNode(node) {
    let n = ".".repeat(node.offset);
    n += node.accNode.role;
    if (node.accNode.name) {
      n += ` "${node.accNode.name}"`;
    }

    if (node.accNode.posInSet || node.accNode.setSize) {
      n += ` [${node.accNode.posInSet} of ${node.accNode.setSize}]`;
    }

    let props = [];
    addProps(props, node.accNode);
    props.sort();

    if (this.additionalProps) {
      this.additionalProps.forEach(ap => {
        addProps(props, ap(node));
      });
    }

    props.forEach(prop => (n += prop));

    this.outputFn(n);
  }
}
