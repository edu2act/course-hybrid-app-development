import { NumPipe } from './num.pipe';

describe('NumPipe', () => {
  it('create an instance', () => {
    const pipe = new NumPipe();
    expect(pipe).toBeTruthy();
  });
});
