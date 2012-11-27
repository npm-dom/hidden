# hidden

Cross browser Element#hidden

## Example

`hidden(elem)` returns whether that element is hidden.
`hidden(elem, value)` sets the hidden property on the element.

This shims older browsers using `style.display = "none"`

```js
var hidden = require("hidden")

    , a = document.getElementById("a")
    , b = document.getElementById("b")

console.log("a isHidden", hidden(a))
console.log("b isHidden", hidden(b))

setTimeout(function () {
    a.textContent = "now shown"
    b.textContent = "now hidden"

    hidden(a, false)
    hidden(b, true)
}, 2000)
```

## Installation

`npm install hidden`

## Contributors

 - Raynos

## MIT Licenced
