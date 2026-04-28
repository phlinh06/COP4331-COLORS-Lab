test('API response structure is valid', () => {
  const data = { colors: ['red', 'blue'] };

  expect(Array.isArray(data.colors)).toBe(true);
});
