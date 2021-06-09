import { log } from './index';
import { HELLO_WORLD } from './index.mocks';

test('console.log the text "hello"', () => {
  console.log = jest.fn();
  log(HELLO_WORLD);
  expect(console.log).toHaveBeenCalledWith(HELLO_WORLD);
});
