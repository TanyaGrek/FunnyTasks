import { log } from './index';
import { HELLO_WORLD } from './index.mocks';

// describe('Hello, World is calling', () => {
test('console.log the text "hello"', () => {
  console.log = jest.fn();
  log(HELLO_WORLD);
  // The first argument of the first call to the function was 'hello'
  expect(console.log).toHaveBeenCalledWith(HELLO_WORLD);
});
// });
