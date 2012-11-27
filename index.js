/*global document*/
var support = "hidden" in document.documentElement

module.exports = support ? hidden : shim

function hidden(elem, value) {
    if (arguments.length === 1) {
        return elem.hidden
    }

    elem.hidden = value
}

function shim(elem, value) {
    if (arguments.length === 1) {
        return elem.style.display === "none"
    }

    elem.style.display = value ? "none" : "block"
}
