import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, take, tap } from 'rxjs';
import { AuthState } from 'src/app/common/modules/auth/store/reducers';
import { getUser } from 'src/app/common/modules/auth/store/selectors';
import { UserDto } from 'src/app/web-api-client';

import {
  adminNavItems,
  navItemsDefault,
  reporterNavItems,
  superAdminNavItems,
  verifierNavItems,
} from './_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent implements OnInit {
  user$: Observable<UserDto | null | undefined>;
  public navItems: any;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor(private store: Store<AuthState>) {}

  ngOnInit() {
    this.store
      .select(getUser)
      .pipe(take(1))
      .subscribe((user) => this.getMenu(user?.roles));
  }

  getMenu(roles: string[] | undefined): void {
    if (roles?.length == 0) return;

    if (roles?.find((r) => r == 'Super Admin')) {
      this.navItems = superAdminNavItems;
    } else if (roles?.find((r) => r == 'Admin')) {
      this.navItems = adminNavItems;
    } else if (roles?.find((r) => r == 'Verifier')) {
      this.navItems = verifierNavItems;
    } else if (roles?.find((r) => r == 'Reporter')) {
      this.navItems = reporterNavItems;
    } else {
      this.navItems = navItemsDefault;
    }
  }
}
