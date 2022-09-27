
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: '100,000', rate: '.04', years: '1'})).toEqual('8514.99');
  expect(calculateMonthlyPayment({amount: '100000.99', rate: '.07', years: '2'})).toEqual('4477.30');
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount: '100000.99', rate: '.07', years: '2'})).toEqual('4477.30');
  expect(calculateMonthlyPayment({amount: 0, rate: .05, years: 5})).toEqual('0.00');
});

/// etc
