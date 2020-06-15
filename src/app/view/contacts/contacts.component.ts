import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { ViewportService, BreakpointService } from 'src/app/services/viewport/viewport.service';
import { IContact } from '../../interfaces/shared.interfaces';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  providers: [
    {
      provide: BreakpointService,
      useClass: ViewportService
    }
  ],
  animations: [
    trigger('expand', [
      state('expanded', style({height: '0px', minHeight: '0'})),
      state('collapsed', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ContactsComponent {

  @Input() public list: MatTableDataSource<IContact> = new MatTableDataSource<IContact>();

  public displayedColumns: string[];
  public detailColumns: string[] = [];
  public expanded: IContact;

  private fullColumns: string[] = [ 'fullName', 'phone', 'company', 'more'];
  private mobileColumns: string[] = [ 'fullName' ];

  constructor(private viewport: BreakpointService) {
    viewport.stateObserver
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
}
