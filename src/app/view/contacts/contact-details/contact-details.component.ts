import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IContact } from 'src/app/interfaces/shared.interfaces';
import { BreakpointService, ViewportService } from 'src/app/services/viewport/viewport.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  providers: [
    {
      provide: BreakpointService,
      useClass: ViewportService,
    },
  ],
  styleUrls: [ './contact-details.component.scss' ],
})
export class ContactDetailsComponent implements OnInit, OnDestroy {

  @Input() contact: IContact;

  public details = [];
  public displayedItems = [];
  private fullscreenItems: string[] = [ 'Email', 'Address' ];
  private subscription: Subscription;

  constructor(private viewport: BreakpointService) { }

  breakpointHandler(breakpoint) {
    if (breakpoint === ViewportService.STATES.MOBILE) {
      this.displayedItems = this.details.slice();
    } else {
      this.displayedItems = this.details.filter(el => this.fullscreenItems.includes(el.label));
    }
  }

  ngOnInit(): void {
    this.details = [
      {
        label: 'Email',
        icon: 'email',
        value: this.contact.email,
      },
      {
        label: 'Address',
        icon: 'location_on',
        value: this.contact.address,
      },
      {
        label: 'Phone',
        icon: 'perm_phone_msg',
        value: this.contact.phone,
      },
      {
        label: 'Company Name',
        icon: 'business_center',
        value: this.contact.company,
      },
    ];

    this.subscription = this.viewport.stateObserver
      .subscribe(this.breakpointHandler.bind(this));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
