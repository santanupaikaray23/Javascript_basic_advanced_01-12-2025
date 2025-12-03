const { use } = require("react")

var a = [4,5,7,3,8,9,11,21,53]
a.map((data)=>{console.log(data)})
VM95:2 4
VM95:2 5
VM95:2 7
VM95:2 3
VM95:2 8
VM95:2 9
VM95:2 11
VM95:2 21
VM95:2 53
(9) [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]0: undefined1: undefined2: undefined3: undefined4: undefined5: undefined6: undefined7: undefined8: undefinedlength: 9[[Prototype]]: Array(0)
var a = [4,5,7,3,8,9,11,21,53]
a.map((data)=>{return data*2})
(9) [8, 10, 14, 6, 16, 18, 22, 42, 106]

>Map is use to iterate over the Array
>It always return same length of output as input Array
>It is used to apply logics (sum, mul, div) or return html, bind data.

var a = [4,5,7,3,8,9,11,21,53]
a.map((data) => {return `<p>${data*2}</p>`})

var a = [4,5,17,3,8,9,11,21,15,53]
a.filter((data) => {return data>10})

> filter is use to filter out the value.
> It may or may not return length of input Array.
> It only return those value which condition /output is true.

var a = [0,1,2,3]
a.map((data) => {return data*2})
a.filter((data)=>{return data*2})