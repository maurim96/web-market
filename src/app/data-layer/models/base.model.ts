import { Utils, BaseModelInterface } from '../core';

export abstract class BaseDataModel extends BaseModelInterface {
  getCopy(): this {
    const cls = Utils.getModelClass(this);
    const copy = new cls();
    Object.keys(this).forEach(key => copy[key] = this[key]);

    return copy;
  }

  abstract getId(): string;
}
