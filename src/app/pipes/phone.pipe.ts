import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser'; 
/*
 * Format the phone number
 * Takes a phone number and formats it.
 * Usage:
 *   value | phone:format?
 * Example:
 *   {{ "+1 (313) 555-1212" | phone:dash }}
 *   formats to: 313-555-1212
*/
@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string, format?: string): SafeUrl | string  {
    let nums = value.replace(/[^\d]/g, '');
    let digits = nums.slice(-10);

    if(!format || format === 'dash') {
      return this.dash(digits);
    }

    if(format === 'link') {
      return this.href(nums);
    }
  }

  dash(n: string): string {
      return n.slice(0,3) + '-' + n.slice(3,6) + '-' + n.slice(6,10);
  }

  href(n: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl('tel:' + n);
  }
}
