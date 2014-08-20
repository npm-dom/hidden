module.exports = shim

function shim(elem, value) {
    if (value === undefined) {
        return elem.style.display === "none"
    }

    elem.style.display = value ? "none" : "block"
}
