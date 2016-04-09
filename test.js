var test = require('tape')
var domify = require('domify')
var hidden = require('./')

test('Returns true/false when an element is hidden/not', function(t) {
	var el = domify('<div>eh wut wut</div>')

	t.notOk(hidden(el))

	el.style.display = 'none'
	t.ok(hidden(el))

	t.end()
})

test('Sets an element\'s hiddenness', function(t) {
	var el = domify('<div>o hai</div>')

	t.notOk(hidden(el))

	hidden(el, true)
	t.ok(hidden(el))

	hidden(el, false)
	t.notOk(hidden(el))

	t.end()
})
