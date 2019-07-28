import AOMModel from "./aom/model";
import AOMProcessor from "./aom/processor";

export default class AccessibilitySnapshot {
  constructor(rootNode) {
    this.rootNode = rootNode;
  }

  async process(reporter) {
    let model = new AOMModel();
    const promisses = model.processDOM(this.rootNode);
    await Promise.all(promisses);
    new AOMProcessor(reporter).processNode(model, 0);
  }
}
