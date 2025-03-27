import { setLSData, getLSData, removeLSData, clearLS } from "./localStorageUtils";

describe("localStorage Utilities", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("sets and retrieves string data", () => {
    setLSData("username", "JohnDoe");
    expect(localStorage.getItem("username")).toBe("JohnDoe");
    expect(getLSData("username")).toBe("JohnDoe"); 
  });

  test("sets and retrieves object data", () => {
    const user = { name: "Alice", age: 25 };
    setLSData("user", user);
    expect(getLSData("user")).toEqual(user);
  });

  test("returns default value when key is missing", () => {
    expect(getLSData("missingKey", "default")).toBe("default");
  });

  test("removes specific key", () => {
    setLSData("temp", "data");
    removeLSData("temp");
    expect(localStorage.getItem("temp")).toBeNull();
  });

  test("clears all localStorage data", () => {
    setLSData("key1", "value1");
    setLSData("key2", "value2");
    clearLS();
    expect(localStorage.length).toBe(0);
  });
});
