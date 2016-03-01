describe('convertNumbers unit test', function() {
  var ones = getOnes();
  var tens = getTens();

  it('convert [1] to ["one"]', function() {
    expect(convertNumbers([1], ones, tens)).toEqual(['one']);
  });
  it('convert [12] to ["twelve"]', function() {
    expect(convertNumbers([12], ones, tens)).toEqual(['twelve']);
  });
  it('convert [123] to ["one hundred and twenty three"]', function() {
    expect(convertNumbers([123], ones, tens)).toEqual(['one hundred and twenty three']);
  });
  it('convert [12, 345] to ["twelve hundred", "three hundred and fourty five"]', function() {
    expect(convertNumbers([12, 345], ones, tens)).toEqual(['twelve', 'three hundred and forty five']);
  });
  it('convert [1, 234, 567] to ["one million", "two hundred and thirty four", "five hundred and sixty seven"]', function() {
    expect(convertNumbers([1, 234, 567], ones, tens)).toEqual(['one', 'two hundred and thirty four', 'five hundred and sixty seven']);
  });
});
