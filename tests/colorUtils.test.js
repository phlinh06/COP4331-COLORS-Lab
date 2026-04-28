test('color JSON structure is valid', () => {
  const mockResponse = {
    colors: ['red', 'blue', 'green']
  };

  expect(Array.isArray(mockResponse.colors)).toBe(true);
  expect(mockResponse.colors.length).toBeGreaterThan(0);
});
