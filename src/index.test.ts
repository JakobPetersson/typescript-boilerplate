import { hello } from './index';

describe('Hello', () => {
  it('should return world', () => {
    expect(hello()).toBe('world');
  });
});
