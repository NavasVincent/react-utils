export const setLSData = (key, value) => {
  try {
    const data = typeof value === "object" ? JSON.stringify(value) : value;
    localStorage.setItem(key, data);
  } catch (error) {
    console.error(`Error saving to localStorage: ${error}`);
  }
};

export const getLSData = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key);
    if (item === null) return defaultValue;

    // ✅ Check if item is JSON before parsing
    if (item.startsWith("{") || item.startsWith("[")) {
      return JSON.parse(item);
    }

    return item; // Return as a string if it's not JSON
  } catch (error) {
    console.warn(`Error parsing localStorage key "${key}": ${error}`);
    return defaultValue;
  }
};


export const removeLSData = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing localStorage key "${key}": ${error}`);
  }
};

export const clearLS = () => {
  try {
    localStorage.clear();
  } catch (error) {
    console.error(`Error clearing localStorage: ${error}`);
  }
};
