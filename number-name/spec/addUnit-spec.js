describe('addUnit unit test', function() {
  it('convert ["one hundred"] to ["one hundred"]', function() {
    expect(addUnit(['one hundred'])).toEqual(['one hundred']);
  });
  it('convert ["twenty one", "forty eight"] to ["twenty one thousand and", "forty eight"]', function() {
    expect(addUnit(["twenty one", "forty eight"])).toEqual(["twenty one thousand and", "forty eight"]);
  });
  it('convert ["twenty one", "one hundred and forty eight"] to ["twenty one thousand,", "one hundred and forty eight"]', function() {
    expect(addUnit(["twenty one", "one hundred and forty eight"])).toEqual(["twenty one thousand,", "one hundred and forty eight"]);
  });
  it('convert ["sixty five", "twenty one", "one hundred and forty eight"] to ["sixty five million and", "twenty one thousand,", "one hundred and forty eight"]', function() {
    expect(addUnit(["sixty five", "twenty one", "one hundred and forty eight"])).toEqual(["sixty five million and", "twenty one thousand,", "one hundred and forty eight"]);
  });
});
