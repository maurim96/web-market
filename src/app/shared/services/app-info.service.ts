import { Injectable } from '@angular/core';

import { RouteQueryParams } from '../models';

@Injectable()
export class AppInfoService {
  routeQueryParams = new RouteQueryParams();

  constructor() {}
}
