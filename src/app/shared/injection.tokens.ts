import { BreakpointObserver } from '@angular/cdk/layout';
import { inject, InjectionToken } from '@angular/core';
import { IViewportService } from 'src/app/interfaces/shared.interfaces';
import { ViewportService } from 'src/app/services/viewport/viewport.service';

export const ITOKENS = {
  IViewportService: new InjectionToken<IViewportService>('ViewportService', {
    providedIn: 'root',
    factory: (): IViewportService => new ViewportService(inject(BreakpointObserver)),
  }),
};
