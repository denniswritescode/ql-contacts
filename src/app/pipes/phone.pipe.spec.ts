import { inject } from '@angular/core/testing';

import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { PhonePipe } from './phone.pipe';


let phone: PhonePipe;
let sanitizer: DomSanitizer;

describe('PhonePipe', () => {

  beforeEach(inject([DomSanitizer], (domSanitizer: DomSanitizer) => {
    sanitizer = domSanitizer;
    phone = new PhonePipe(sanitizer);
  }));

  it('create an instance', () => {
    expect(phone).toBeTruthy();
  });

  it('should transform correctly (with "dash") when no format is passed', () => {
    expect(phone.transform('3135551212')).toBe('313-555-1212');
    expect(phone.transform('12228901212')).toBe('222-890-1212');
    expect(phone.transform('(111) 777-1212')).toBe('111-777-1212');
    expect(phone.transform('+1 (313) 555-1212')).toBe('313-555-1212');
  });

  it('should transform correctly in the "dash" format', () => {
    expect(phone.transform('3135551212', 'dash')).toBe('313-555-1212');
    expect(phone.transform('13138771212', 'dash')).toBe('313-877-1212');
    expect(phone.transform('(313) 555-5678', 'dash')).toBe('313-555-5678');
    expect(phone.transform('+1 (313) 555-1212', 'dash')).toBe('313-555-1212');
  });

  it('should transform correctly (to a safe url) in the "link" format', () => {
    spyOn(sanitizer, 'bypassSecurityTrustUrl');

    phone.transform('+1 810-666-4578', 'link');
    expect(sanitizer.bypassSecurityTrustUrl).toHaveBeenCalledWith('tel:18106664578');
  });

  it('should just return the string if the format isn\'t valid', () => {
    expect(phone.transform('3135551212', 'true')).toBe('3135551212');
    expect(phone.transform('13138771212', '1')).toBe('13138771212');
    expect(phone.transform('(313) 555-5678', '0')).toBe('(313) 555-5678');
    expect(phone.transform('+1 (313) 555-1212', 'dashed')).toBe('+1 (313) 555-1212');
  });

  it('should just return the string if there are too many numbers or too few', () => {
    expect(phone.transform('313555121255')).toBe('313555121255');
    expect(phone.transform('131387712')).toBe('131387712');
    expect(phone.transform('(33) 555-5678')).toBe('(33) 555-5678');
    expect(phone.transform('+11 (313) 89555-1212')).toBe('+11 (313) 89555-1212');
  });
});
