import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppInfoService } from 'src/app/shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private appInfoService: AppInfoService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      Object.keys(this.appInfoService.routeQueryParams).forEach((key) => {
        if (typeof this.appInfoService.routeQueryParams[key] === 'boolean') {
          this.appInfoService.routeQueryParams[key] =
            params.get(key) === 'true';
        } else {
          this.appInfoService.routeQueryParams[key] = params.get(key);
        }
      });
    });
  }
}
