for
while
do while
for of
for in
Map
filter

///////////////
for> generate serices of value or help to iterate over the Array

for(i=0;i<5;i++){
    console.log(i)
}

for(var i=0; i<5; i++){
    let a = 10
    console.log(a+i)
}

var a = 20
for(var i=0; i<5; i++){
    console.log(a+i)
}

for(var i=0; i<5; i++){
    const a = 10
    console.log(a+i)
}

var city = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai']
for(i=0; i<city.length; i++){
    console.log(`${city[i]}`)
}

for(i=0; i<5; i++){
    for(j=0; j<i; j++){
        console.log(i+j)
    }
}

var myarray = ["Happy", "Learning", "JavaScript",["Bmw", "Audi", "Skoda"], "Enjoy"]
for(i=0; i<myarray.length; i++){
    for(j=0; j<myarray[i].length; j++){
        console.log(myarray[i][j])
    }
}

// Nested for loop:
// Outer loop will run and inner loop will run

var city = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai']
undefined
city.indexOf('Delhi')
1
city.indexOf('Puri')
-1
city.indexOf('Bangalore')
2
city.indexOf('Mumbai')
0
var a = "hii"
var b = ['Hello']
undefined
Array.isArray(a)
false
Array.isArray(b)
true
var city = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai']
undefined
city.sort()
(4) ['Bangalore', 'Chennai', 'Delhi', 'Mumbai']

var city = ['Mumbai', false, 'Delhi', 1, 2, 4, 'Bangalore', true,  'Chennai']
undefined
city.sort()
(9) [1, 2, 4, 'Bangalore', 'Chennai', 'Delhi', 'Mumbai', false, true]
city.reverse()
(9) [true, false, 'Mumbai', 'Delhi', 'Chennai', 'Bangalore', 4, 2, 1]
city.reverse()
(9) [1, 2, 4, 'Bangalore', 'Chennai', 'Delhi', 'Mumbai', false, true]
var myarray = ['Mumbai', 'Delhi', ['Red', 'Green', ['Bmw', 'Audi', 'Skoda'], 'Orange', 'yellow'], 'Bangalore', 'Chennai']
undefined
myarray[1]
'Delhi'
myarray[2]
(5) ['Red', 'Green', Array(3), 'Orange', 'yellow']0: "Red"1: "Green"2: Array(3)0: "Bmw"1: "Audi"2: "Skoda"length: 3[[Prototype]]: Array(0)3: "Orange"4: "yellow"length: 5[[Prototype]]: Array(0)
myarray[2],[1]
[1]0: 1length: 1[[Prototype]]: Array(0)
myarray[2][1]
'Green'
myarray[3]
'Bangalore'
myarray[2][2]
(3) ['Bmw', 'Audi', 'Skoda']
myarray[2][2][1]
'Audi'
myarray[0][0]
'M'
myarray[3][3]
'g'
city
(9) [1, 2, 4, 'Bangalore', 'Chennai', 'Delhi', 'Mumbai', false, true]
var myarray = ['Mumbai', 'Delhi', ['Red', 'Green', ['Bmw', 'Audi', 'Skoda'], 'Orange', 'yellow'], 'Bangalore', 'Chennai']
undefined
myarray.flat()
(9) ['Mumbai', 'Delhi', 'Red', 'Green', Array(3), 'Orange', 'yellow', 'Bangalore', 'Chennai']
myarray.flat(2)
(11) ['Mumbai', 'Delhi', 'Red', 'Green', 'Bmw', 'Audi', 'Skoda', 'Orange', 'yellow', 'Bangalore', 'Chennai']

for(i=0;i<5;i++){
    console.log(i)
}
VM1093:3 0
VM1093:3 1
VM1093:3 2
VM1093:3 3
VM1093:3 4
undefined

for(i=0;i<10;i++){
    console.log(i)
}
VM1099:3 0
VM1099:3 1
VM1099:3 2
VM1099:3 3
VM1099:3 4
VM1099:3 5
VM1099:3 6
VM1099:3 7
VM1099:3 8
VM1099:3 9
undefined
for(var i=0; i<5; i++){
    let a = 10
    console.log(a+i)
}
VM1103:3 10
VM1103:3 11
VM1103:3 12
VM1103:3 13
VM1103:3 14
undefined
var a = 20
for(var i=0; i<5; i++){
    console.log(a+i)
}
VM1107:3 20
VM1107:3 21
VM1107:3 22
VM1107:3 23
VM1107:3 24
undefined
const a = 20
for(var i=0; i<5; i++){
    console.log(a+i)
}
VM1111:1 Uncaught SyntaxError: Identifier 'a' has already been declaredUnderstand this error
for(var i=0; i<5; i++){
    const a = 10
    console.log(a+i)
}
VM1115:3 10
VM1115:3 11
VM1115:3 12
VM1115:3 13
VM1115:3 14
undefined
var city = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai']
for(i=0; i<city.length; i++){
    console.log(`${city[i]}`)
}
VM1119:3 Mumbai
VM1119:3 Delhi
VM1119:3 Bangalore
VM1119:3 Chennai
undefined
for(i=0; i<5; i++){
    for(j=0; j<i; j++){
        console.log(i+j)
    }
}
VM1123:3 1
VM1123:3 2
VM1123:3 3
VM1123:3 3
VM1123:3 4
VM1123:3 5
VM1123:3 4
VM1123:3 5
VM1123:3 6
VM1123:3 7
undefined

var myarray = ["Happy", "Learning", "JavaScript",["Bmw", "Audi", "Skoda"], "Enjoy"]
for(i=0; i<myarray.length; i++){
    for(j=0; j<myarray[i].length; j++){
        console.log(myarray[i][j])
    }
}
VM1127:5 H
VM1127:5 a
VM1127:5 p
VM1127:5 p
VM1127:5 y
VM1127:5 L
VM1127:5 e
VM1127:5 a
VM1127:5 r
VM1127:5 n
VM1127:5 i
VM1127:5 n
VM1127:5 g
VM1127:5 J
VM1127:5 a
VM1127:5 v
VM1127:5 a
VM1127:5 S
VM1127:5 c
VM1127:5 r
VM1127:5 i
VM1127:5 p
VM1127:5 t
VM1127:5 Bmw
VM1127:5 Audi
VM1127:5 Skoda
VM1127:5 E
VM1127:5 n
VM1127:5 j
VM1127:5 o
VM1127:5 y

for(i=0;i<5;i++){
    console.log(`i>>>${i}`)
    for(j=0;j<5;j++){
        console.log(`j>>>${j}`)
    }
}

// while
var i=5
while(i<5){
    console.log(i)
    i++
}

// do while

var i = 5
do{
    console.log(i)
    i++
}
while(i<5)

// for of

var city = ["London","Delhi","NewYork","Paris"]

for(mycity of city){
    console.log(mycity)
}

var city = ["Puri","Cuttack",["Bmw","Audi","Skoda"],"London","Mumbai"]
for(mycity of city){
    if(Array.isArray(mycity)){
        for(cars of mycity){
            console.log(cars)
        }
    }else{
        console.log(mycity)
    }
}

var city = ["London", "Delhi", "NewYork", "Paris"]
for(i=0;i<city.length;i++){
    console.log(city[i])
}

function add(...args){
    console.log()
}

function add(...args){
    let sum = 0
    for(data of args){
        sum = data+sum
    }
    return sum
}

add(1,3,4,5,6)