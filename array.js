// Array is the collection of homegenious or hetrigenious data type.
var a = [1,2,3,4,5](Array of number)
var b = ['Santanu', 'Sidhanta', 'Sipun'](Array of String)
var c = ['true', 'False', 'true'](Array of Boolean)
var d = [1, 'Santanu', true, 2, 'Sidhanta', false](Array of hetrigenious data type)

var city = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai']

var city = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai']
undefined
city.push('Odisha')
5
city()
VM438:1 Uncaught TypeError: city is not a function
    at <anonymous>:1:1
(anonymous) @ VM438:1Understand this error
city
(5) ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Odisha']
city.push('Dubai','Venice')
7
city
(7) ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Odisha', 'Dubai', 'Venice']

var city = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai']
undefined
city.pop()
'Chennai'
city.pop(20000)
'Bangalore'
city
(2) ['Mumbai', 'Delhi']
ciy
VM709:1 Uncaught ReferenceError: ciy is not defined
    at <anonymous>:1:1
(anonymous) @ VM709:1Understand this error
city
(2) ['Mumbai', 'Delhi']
city.unshift('Odisha')
3
city
(3) ['Odisha', 'Mumbai', 'Delhi']
city.shift(1)
'Odisha'
city
(2) ['Mumbai', 'Delhi']

// Push always add in the end of the array

// pop always remove from the end of the array

// unshift always add in the begining of the array

// shift always remove from the begining of the array 

var a = ['a', 'b','c',"hii"]
var b =[1,2,3,4]
a+b

var a = "hii"
var b = ['Hello']

var myarray = ['Mumbai', 'Delhi', ['Red', 'Green', ['Bmw', 'Audi', 'Skoda'], 'Orange', 'yellow'], 'Bangalore', 'Chennai']