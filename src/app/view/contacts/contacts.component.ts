import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import { Subscription, Observable } from 'rxjs';
import { IContact } from 'src/app/interfaces/shared.interfaces';
import { BreakpointService, ViewportService } from 'src/app/services/viewport/viewport.service';
import { skipWhile } from 'rxjs/operators';
import { PageEvent } from '@angular/material/paginator';

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
  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @Input() public list: Observable<IContact[]>;
  public fullList: IContact[] = [];
  public dataSource: MatTableDataSource<IContact>;

  // for showing/hiding info (based on screen size and state)
  public displayedColumns: string[] = [];
  public detailColumns: string[] = [];
  public expanded: IContact;

  // for pagination
  public pageSize = 10;
  public pageIndex = 0;

  private fullColumns: string[] = [ 'fullName', 'phone', 'company', 'more' ];
  private mobileColumns: string[] = [ 'fullName' ];
  private subscriptions: Subscription[] = [];

  constructor(
    public viewport: BreakpointService,
    public changeDetector: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.subscriptions.push(
      this.viewport.stateObserver
        .subscribe(this.breakpointHandler.bind(this))
    );

    this.subscriptions.push(
      this.list
        .pipe(skipWhile(c => !(Array.isArray(c) && c.length) ))
        .subscribe(this.contactsHandler.bind(this))
    );
  }

  contactsHandler(contacts) {
    this.fullList = contacts;
    this.dataSource = new MatTableDataSource(this.fullList);
    this.dataSource.paginator = this.paginator;
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
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
