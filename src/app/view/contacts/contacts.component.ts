import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Subscription } from 'rxjs';
import { BreakpointService, ViewportService } from 'src/app/services/viewport/viewport.service';
import { IContact } from '../../interfaces/shared.interfaces';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: [ './contacts.component.scss' ],
  providers: [
    {
      provide: BreakpointService,
      useClass: ViewportService,
    },
  ],
  animations: [
    trigger('expand', [
      state('expanded', style({ height: '0px', minHeight: '0'})),
      state('collapsed', style({ height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ContactsComponent implements OnInit, OnDestroy {

  @Input() public list: MatTableDataSource<IContact> = new MatTableDataSource<IContact>();

  public displayedColumns: string[] = [];
  public detailColumns: string[] = [];
  public expanded: IContact;

  private fullColumns: string[] = [ 'fullName', 'phone', 'company', 'more' ];
  private mobileColumns: string[] = [ 'fullName' ];
  private subscription: Subscription;

  constructor(public viewport: BreakpointService) { }

  ngOnInit() {
    this.subscription = this.viewport.stateObserver
      .subscribe(this.breakpointHandler.bind(this));
  }

  breakpointHandler(breakpoint) {
    if (breakpoint === ViewportService.STATES.MOBILE) {
      this.setMobileLayout();
    } else {
      this.setFullLayout();
    }
  }

  setMobileLayout() {
    this.displayedColumns = this.mobileColumns;
  }

  setFullLayout() {
    this.displayedColumns = this.fullColumns;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
