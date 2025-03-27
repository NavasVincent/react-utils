// ✅ Debounce function: Delays execution of a function to prevent excessive calls
export const debounce = (func, delay = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};

// ✅ Throttle function: Ensures a function is called at most once per interval
export const throttle = (func, limit = 300) => {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func(...args);
    }
  };
};

// ✅ Capitalize: Converts first letter of a string to uppercase
export const capitalize = (str) => {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
};

// ✅ Truncate Text: Shortens a string to a specific length and adds "..."
export const truncateText = (text, maxLength = 100) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// ✅ Deep Clone: Creates a deep copy of an object to avoid mutations
export const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

// ✅ Generate UUID: Creates a unique identifier
export const generateUUID = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (char) => {
    const random = (Math.random() * 16) | 0;
    const value = char === "x" ? random : (random & 0x3) | 0x8;
    return value.toString(16);
  });
};

// ✅ Format Date: Converts date to readable format (e.g., "Jan 1, 2025")
export const formatDate = (date, locale = "en-US") => {
  return new Date(date).toLocaleDateString(locale, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
