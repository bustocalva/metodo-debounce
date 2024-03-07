import debounce from "../index";
import {expect, jest} from '@jest/globals';

jest.useFakeTimers();

it("probando el debounce", () => {
  const resultado = jest.fn();
  const debouncedMock = () => debounce(resultado, 500);

  debouncedMock();
  expect(resultado).not.toHaveBeenCalled(); // El callback no se ha llamado todavía
  jest.advanceTimersByTime(500); // Permite simular que ha pasado 500 ms
  expect(resultado).toHaveBeenCalledTimes(1); // El callback se ha llamado 1 vez

  jest.advanceTimersByTime(500);
  expect(resultado).toHaveBeenCalledTimes(1);
});
