describe('concatNum unit test', function() {
  it('convert ["one"] to "one"', function() {
    expect(concatNum(['one'])).toEqual("one");
  });
  it('convert ["one thousand and", "one"] to "one thousand and one"', function() {
    expect(concatNum(["one thousand and", "one"])).toEqual("one thousand and one");
  });
  it('convert ["one million,", "one hundred and one thousand and", "one"] to "one million, one hundred and one thousand and one"', function() {
    expect(concatNum(["one million,", "one hundred and one thousand and", "one"])).toEqual("one million, one hundred and one thousand and one");
  });
});
