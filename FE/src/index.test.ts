it('use jsdom in this test file', () => {
  const element = document.createElement('div');
  element.setAttribute('id', 'root');
  expect(element).not.toBeNull();
});
