import { inject, TestBed } from '@angular/core/testing';

import { PhonePipe } from './phone.pipe';
import { DomSanitizer } from '@angular/platform-browser'; 


describe('PhonePipe', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhonePipe],
      providers: [DomSanitizer],
    });
  })

  it('create an instance', inject([DomSanitizer], (sanitizer: DomSanitizer) => {
    const pipe = new PhonePipe(sanitizer);
    expect(pipe).toBeTruthy();
  }));
});
