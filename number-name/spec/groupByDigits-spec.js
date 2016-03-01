describe('groupByDigits unit test', function() {
    it('convert 12 to [12]', function() {
        expect(groupByDigits(12)).toBe([12]);
    });
    it('convert 123 to [123]', function() {
        expect(groupByDigits(123)).toBe([123]);
    });
    it('convert 1234 to [1, 234]', function() {
        expect(groupByDigits(1234)).toBe([1, 234]);
    });
    it('convert 12345 to [12, 345]', function() {
        expect(groupByDigits(12345)).toBe([12, 345]);
    });
    it('convert 1234567 to [1, 234, 567]', function() {
        expect(groupByDigits(1234567)).toBe([1, 234, 567]);
    });
    it('convert 123456789 to [123, 456, 789]', function() {
        expect(groupByDigits(123456789)).toBe([123, 456, 789]);
    });

});
