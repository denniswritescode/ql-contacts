
import { fakeAsync, tick } from '@angular/core/testing';
import { FakeViewportService } from 'src/app/testing/viewport.service.fake';
import { ContactsComponent } from './contacts.component';

describe('ContactsComponent', () => {
  let component: ContactsComponent;
  let viewport: FakeViewportService;

  beforeEach(() => {
    viewport = new FakeViewportService();
    component = new ContactsComponent(viewport);
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should respond to change to mobile', fakeAsync(() => {
    component.setMobileLayout = jasmine.createSpy('setMobileLayout');
    component.setFullLayout = jasmine.createSpy('setFullLayout');

    expect(component.setMobileLayout).not.toHaveBeenCalled();
    expect(component.setFullLayout).not.toHaveBeenCalled();

    viewport.setState(FakeViewportService.STATES.MOBILE);
    tick();

    expect(component.setMobileLayout).toHaveBeenCalled();
    expect(component.setFullLayout).not.toHaveBeenCalled();
  }));

  it('should respond to change to fullscreen',
    fakeAsync(() => {
      component.setMobileLayout = jasmine.createSpy('setMobileLayout');
      component.setFullLayout = jasmine.createSpy('setFullLayout');

      expect(component.setMobileLayout).not.toHaveBeenCalled();
      expect(component.setFullLayout).not.toHaveBeenCalled();

      viewport.setState(FakeViewportService.STATES.FULLSCREEN);
      tick();

      expect(component.setFullLayout).toHaveBeenCalled();
      expect(component.setMobileLayout).not.toHaveBeenCalled();
    })
  );

  it('should change displayed columns based on screen size', () => {
    component.setFullLayout();
    expect(component.displayedColumns.length).toBe(4);
    component.setMobileLayout();
    expect(component.displayedColumns.length).toBe(1);
  });

});
