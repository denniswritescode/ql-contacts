import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IContact, IViewportService } from 'src/app/interfaces/shared.interfaces';
import { ViewportConstants } from 'src/app/services/viewport/viewport.constants';
import { ITOKENS } from 'src/app/shared/injection.tokens';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: [ './contact-details.component.scss' ],
})
export class ContactDetailsComponent implements OnInit, OnDestroy {

  @Input() contact: IContact;

  public details = [];
  public displayedItems = [];
  public subscription: Subscription;

  private fullscreenItems: string[] = [ 'Email', 'Address' ];

  constructor(
    @Inject(ITOKENS.IViewportService) public viewport: IViewportService,
  ) { }

  breakpointHandler(breakpoint) {
    if (breakpoint === ViewportConstants.STATES.MOBILE) {
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
