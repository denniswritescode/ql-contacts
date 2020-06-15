import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { IContact } from '../shared/interfaces/shared.interfaces';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
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
  public mobile: boolean;
  public expanded: IContact;

  private fullColumns: string[] = [ 'fullName', 'phone', 'company', 'more'];
  private mobileColumns: string[] = [ 'fullName' ];

  constructor(breaks: BreakpointObserver) {
    breaks
      .observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
      .subscribe(this.breakpointSubscriber.bind(this));
  }

  breakpointSubscriber(breakpoint) {
    if(!breakpoint.matches) {
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
