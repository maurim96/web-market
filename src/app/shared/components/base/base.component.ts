import { Subscription } from 'rxjs';
import { OnDestroy, Directive } from '@angular/core';

@Directive()
export class BaseComponent implements OnDestroy {
  protected subscriptions = new Subscription();

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
