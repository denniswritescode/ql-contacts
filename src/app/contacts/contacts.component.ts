import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { IContact } from '../shared/interfaces/shared.interfaces';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {


  @Input() public list: MatTableDataSource<IContact> = new MatTableDataSource<IContact>();

  public displayedColumns: string[];
  public detailColumns: string[] = [];
  public mobile: boolean;

  private fullColumns: string[] = [ 'fullName', 'phone', 'company', 'more'];
  private mobileColumns: string[] = [ 'fullName' ];

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
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
    this.mobile = true;
    this.displayedColumns = this.mobileColumns;
  }

  setFullLayout() {
    this.mobile = false;
    this.displayedColumns = this.fullColumns;
  }
}
