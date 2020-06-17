import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  it('should create an instance', () => {
    const pipe = new TruncatePipe();
    expect(pipe).toBeTruthy();
  });

  it('should shorten text', () => {
    const text = 'Here is some long text. (not that long)';
    const pipe = new TruncatePipe();

    expect(pipe.transform(text, 10)).toBe('Here is so...');
    expect(pipe.transform(text, 4)).toBe('Here...');
    expect(pipe.transform(text, 20)).toBe('Here is some long te...');
  });

  it('should return the same text if it is not longer than the limit', () => {
    const text = 'here is text';
    const pipe = new TruncatePipe();

    expect(pipe.transform(text, 50)).toBe(text);
    expect(pipe.transform(text, 12)).toBe(text);
    expect(pipe.transform(text, 26)).toBe(text);
  });
});
