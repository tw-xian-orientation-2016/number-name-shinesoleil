describe('convertNumbers unit test', function() {
  it('convert [1] to ["one"]', function() {
    expect(convertNumbers([1])).toEqual(['one']);
  });
  it('convert [12] to ["twelve"]', function() {
    expect(convertNumbers([12])).toEqual(['twelve']);
  });
  it('convert [123] to ["one hundred and twenty three"]', function() {
    expect(convertNumbers([123])).toEqual(['one hundred and twenty three']);
  });
  it('convert [12, 345] to ["twelve hundred", "three hundred and fourty five"]', function() {
    expect(convertNumbers([12, 345])).toEqual(['twelve', 'three hundred and fourty five']);
  });
  it('convert [1, 234, 567] to ["one million", "two hundred and thirty four", "five hundred and sixty seven"]', function() {
    expect(convertNumbers([1, 234, 567])).toEqual(['one', 'two hundred and thirty four', 'five hundred and sixty seven']);
  });
});
