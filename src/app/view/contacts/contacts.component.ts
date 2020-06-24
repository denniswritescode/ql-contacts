import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Inject, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import { Observable, Subscription } from 'rxjs';
import { skipWhile } from 'rxjs/operators';
import { IContact, IViewportService } from 'src/app/interfaces/shared.interfaces';
import { ViewportConstants } from 'src/app/services/viewport/viewport.constants';
import { ITOKENS } from 'src/app/shared/injection.tokens';
import { CONTACT_TABLE_CONFIG } from './contacts-table.config';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: [ './contacts.component.scss' ],
  animations: [
    trigger('expand', [
      state('expanded', style({ height: '0px', minHeight: '0'})),
      state('collapsed', style({ height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ContactsComponent implements OnInit, OnDestroy {
  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @Input() public contacts: Observable<IContact[]>;
  public dataSource: MatTableDataSource<IContact>;
  public dataLength: number;

  // for showing/hiding info (based on screen size and state)
  public displayedColumns: string[] = [];
  public detailColumns: string[] = [];
  public expanded: IContact;

  public tableConfig = CONTACT_TABLE_CONFIG;
  public fullColumns: string[] = [ 'name', 'phone', 'company', 'more' ];
  public mobileColumns: string[] = [ 'name' ];
  public subscriptions: Subscription[] = [];

  constructor(
    @Inject(ITOKENS.IViewportService) private viewport: IViewportService,
  ) { }

  ngOnInit() {
    this.subscriptions.push(
      this.viewport.stateObserver
        .subscribe(this.breakpointHandler.bind(this))
    );

    this.subscriptions.push(
      this.contacts
        .pipe(skipWhile(c => !(Array.isArray(c) && c.length) ))
        .subscribe(this.contactsHandler.bind(this))
    );
  }

  contactsHandler(data) {
    this.dataLength = data.length;
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
  }

  breakpointHandler(breakpoint) {
    if (breakpoint === ViewportConstants.STATES.MOBILE) {
      this.setMobileLayout();
    } else {
      this.setFullLayout();
    }
  }

  mobile() {
    return this.viewport.mobile();
  }

  setMobileLayout() {
    this.displayedColumns = this.mobileColumns;
  }

  setFullLayout() {
    this.displayedColumns = this.fullColumns;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
