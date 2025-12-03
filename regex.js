RegExp
regular expression
^$
var a = "Hi"
a.match("^([a-z])$")

var a = "hii"
a.match("^([a-z]{2})$")

var a = "Hi"
a.match("^([A-Za-z]{2})$")

var a = "iHii90"
a.match("^([D-Ja-z0-9]+)$")

var a = "8917310896"
a.match("^([0-9]{10})$")

var email = "a@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")

var a = "Hi"
a.match("^([a-z])$")
null
var a = "hi"
a.match("^([a-z])$")
null
var a = "h"
a.match("^([a-z])$")
(2) ['h', 'h', index: 0, input: 'h', groups: undefined]
var a = "hi"
a.match("^([a-z]{2})$")
(2) ['hi', 'hi', index: 0, input: 'hi', groups: undefined]
var a = "hii"
a.match("^([a-z]{2})$")
null
var a = "Hi"
a.match("^([A-Za-z]{2})$")
(2) ['Hi', 'Hi', index: 0, input: 'Hi', groups: undefined]
var a = "iHii90"
a.match("^([D-Ja-z0-9]+)$")
(2) ['iHii90', 'iHii90', index: 0, input: 'iHii90', groups: undefined]
var a = "8917310896"
a.match("^([0-9]{10})$")
(2) ['8917310896', '8917310896', index: 0, input: '8917310896', groups: undefined]
var a = "8917310896"
a.match("^([0-9]{11})$")
null
var email = "a@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
(4) ['a@a.com', 'a', 'a', 'com', index: 0, input: 'a@a.com', groups: undefined]