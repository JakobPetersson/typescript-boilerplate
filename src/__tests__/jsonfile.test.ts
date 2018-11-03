import testData from './testdata.json';

describe('JSON files', () => {
  it('should import json files correctly', () => {
    expect(testData.data.number).toEqual(1);
    expect(testData.data.string).toEqual('a string');
  });
});
