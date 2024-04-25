# twscope
Library to prevent class bloating for Tailwind CSS

## Setup
1. Add the <code>twscope.js</code> to the root directory of your project
2. Add the <code>script.js</code> to the root directory of your project

## [scope] tag
```html
<!-- Use [scope] tag and assign a bind variable -->
<button ype="button"
  [scope]="submitButton">
  Submit
</button>

<script>
// Import createScope
import createScope from "./twscope.js";

// Create and init the scope
var scope = createScope();

// Save classes name and assign it to the bind variable
scope.save("submitButton", "mt-5 ml-5 text-white bg-blue-700 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800");

// Compile the scope
scope.compile();
</script>
```
