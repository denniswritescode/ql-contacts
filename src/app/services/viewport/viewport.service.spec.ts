import { fakeAsync, inject, tick, TestBed } from '@angular/core/testing';
import { FakeMediaMatcher } from '../../testing/media-matcher.fake';

import { BreakpointObserver, LayoutModule, MediaMatcher } from '@angular/cdk/layout';
import { ViewportService } from './viewport.service';

describe('ViewportService', () => {
  let service: ViewportService;
  let breakpointObserver: BreakpointObserver;
  let mediaMatcher: FakeMediaMatcher;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [ LayoutModule ],
      providers: [
        { provide: MediaMatcher, useClass: FakeMediaMatcher },
      ],
    });
    service = TestBed.inject(ViewportService);
  }));

  beforeEach(inject(
    [ BreakpointObserver, MediaMatcher ],
    (bpo: BreakpointObserver, mm: FakeMediaMatcher) => {
      breakpointObserver = bpo;
      mediaMatcher = mm;
    }));

  afterEach(() => {
    mediaMatcher.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be observing 3 breakpoints', () => {
    expect(mediaMatcher.queryCount).toBe(service.breaks.length);
  });

  it('should update the state when the breakpoint state changes',
    fakeAsync(() => {
      // Trigger a fullscreen breakpoint update..
      mediaMatcher.setMatchesQuery(service.breaks[0], true);
      // wait one tick for observer functions to run.
      tick();
      // state should be updated.
      expect(service.getState()).toBe(ViewportService.STATES.FULLSCREEN);

      // Trigger a mobile breakpoint update..
      mediaMatcher.setMatchesQuery(service.breaks[0], false);
      mediaMatcher.setMatchesQuery(service.breaks[1], false);
      mediaMatcher.setMatchesQuery(service.breaks[2], false);
      // wait one tick for observer functions to run.
      tick();
      // state should be updated.
      expect(service.getState()).toBe(ViewportService.STATES.MOBILE);
    })
  );

  it('should publish changes when the breakpoint state changes',
    fakeAsync(() => {
      let isFullscreen = false;
      // subscribe to breakpoint messages
      service.stateObserver
        .subscribe((viewportState) => {
          isFullscreen = viewportState === ViewportService.STATES.FULLSCREEN;
        });

      // Trigger a fullscreen breakpoint update..
      mediaMatcher.setMatchesQuery(service.breaks[0], true);
      // wait one tick for observer functions to run.
      tick();
      // state should be updated via subscription.
      expect(isFullscreen).toBeTrue();
      expect(service.fullscreen()).toBeTrue();
      expect(service.mobile()).toBeFalse();

      // Trigger a mobile breakpoint update..
      mediaMatcher.setMatchesQuery(service.breaks[0], false);
      mediaMatcher.setMatchesQuery(service.breaks[1], false);
      mediaMatcher.setMatchesQuery(service.breaks[2], false);
      // wait one tick for observer functions to run.
      tick();
      // state should be updated.
      expect(isFullscreen).toBeFalse();
      expect(service.fullscreen()).toBeFalse();
      expect(service.mobile()).toBeTrue();
    })
  );
});
