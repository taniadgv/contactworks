describe('tel filter', function() {
  var tel;

  beforeEach(function() {
    module('contactWorks.filters');

    inject(function(telFilter) {
      tel = telFilter;
    });
  });

  it('should filter complete telephone numbers', function() {
    expect(tel('5182614001')).toBe('+55 (51) 8261-4001');
  });

  it('should not filter incomplete telephone numbers', function() {
    expect(tel('82614001')).toBe('82614001');
  });

});