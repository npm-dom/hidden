/*global document*/
var hidden = require("../..")

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

