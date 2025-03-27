# React Utilities Package

A collection of reusable React utilities and components for improving development efficiency.

## 📌 Installation

To install the package, run:

```sh
npm install react-utils
```

---

## 🚀 Usage

### 1⃣ **Local Storage Utilities**
#### 📝 `setLSData(key, value)`
Stores data in local storage. If the value is an object, it will be stringified.

```javascript
import { setLSData, getLSData, removeLSData, clearLS } from "react-utils";

setLSData("user", { name: "John Doe", age: 30 });
```

#### 📝 `getLSData(key)`
Retrieves data from local storage and parses it if it's a JSON object.

```javascript
const user = getLSData("user");
console.log(user.name); // "John Doe"
```

#### 📝 `removeLSData(key)`
Removes a specific key from local storage.

```javascript
removeLSData("user");
```

#### 📝 `clearLS()`
Clears all local storage data.

```javascript
clearLS();
```

---

### 2⃣ **Rendering Utilities**
#### 📝 `<Each />`
A wrapper component for rendering lists.

```javascript
import { Each } from "react-utils";

const items = ["Apple", "Banana", "Cherry"];

<Each
  of={items}
  render={(item, index) => <p key={index}>{item}</p>}
/>;
```

#### 📝 `<Show />`
A conditional rendering component.

```javascript
import { Show } from "react-utils";

<Show>
  <Show.When isTrue={true}>
    <p>This will be shown!</p>
  </Show.When>
  <Show.Else>
    <p>This will NOT be shown!</p>
  </Show.Else>
</Show>;
```

---

### 3⃣ **Helper Functions**
#### 📝 `debounce(func, delay)`
Prevents a function from being called too frequently.

```javascript
import { debounce } from "react-utils";

const search = debounce((query) => {
  console.log("Searching for:", query);
}, 300);

search("apple");
```

#### 📝 `throttle(func, limit)`
Ensures a function is executed at most once every `limit` milliseconds.

```javascript
import { throttle } from "react-utils";

const handleScroll = throttle(() => {
  console.log("Scroll event triggered");
}, 500);

window.addEventListener("scroll", handleScroll);
```

#### 📝 `capitalize(str)`
Capitalizes the first letter of a string.

```javascript
import { capitalize } from "react-utils";

console.log(capitalize("hello")); // "Hello"
```

#### 📝 `truncateText(text, maxLength)`
Truncates a string and appends `...` if it exceeds `maxLength`.

```javascript
import { truncateText } from "react-utils";

console.log(truncateText("This is a long text", 10)); // "This is a ..."
```

#### 📝 `deepClone(obj)`
Creates a deep copy of an object.

```javascript
import { deepClone } from "react-utils";

const original = { name: "John" };
const copy = deepClone(original);
console.log(copy === original); // false
```

#### 📝 `generateUUID()`
Generates a unique identifier.

```javascript
import { generateUUID } from "react-utils";

console.log(generateUUID()); // "f9e8b3a4-45d2-4a9b-bb21-2d9d3f3e1c8e"
```

#### 📝 `formatDate(date, locale)`
Formats a date into a readable string.

```javascript
import { formatDate } from "react-utils";

console.log(formatDate("2025-01-01")); // "Jan 1, 2025"
```

---

## 🔗 **License**
This package is licensed under the MIT License.

---

## ⭐ **Support & Contributions**
Feel free to contribute by submitting issues and pull requests!

```sh
git clone https://github.com/react-utils.git
```