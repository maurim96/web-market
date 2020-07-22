import { BaseDataModel } from '../models';

export abstract class BaseEntityManager {
  protected getIdAndInstance<T extends BaseDataModel>(idStr: string | T,
                                                         cls: { new(): T }): { idStr: string; instance: T } {
    return {
      idStr: (typeof idStr === 'string') ? idStr : idStr.getId(),
      instance: (idStr instanceof cls) ? idStr : (new cls())
    };
  }
}
