import { debounce, generateUUID, capitalize } from "./helpers";

describe("Utility Functions", () => {
  test("debounce function delays execution", (done) => {
    jest.useFakeTimers();
    const mockFn = jest.fn();

    const debouncedFn = debounce(mockFn, 500);
    debouncedFn();
    debouncedFn();
    debouncedFn();

    jest.advanceTimersByTime(400);
    expect(mockFn).not.toBeCalled();

    jest.advanceTimersByTime(100);
    expect(mockFn).toBeCalledTimes(1);

    jest.useRealTimers();
    done();
  });

  test("generateUUID returns unique values", () => {
    const id1 = generateUUID();
    const id2 = generateUUID();

    expect(id1).not.toEqual(id2);
    expect(id1).toHaveLength(36);
  });

  test("capitalize converts first letter to uppercase", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("world")).toBe("World");
  });
});
