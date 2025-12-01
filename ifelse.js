if(cndition){
    //do something
}else{
    //do something
}

var a = 3456
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}

var a = 3457
if(a%2==0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}

var name = "Santanu";
if(name == "Santanu"){
    console.log(`Hi ${name}, you are admin`)
}else if(name == "Sidhanta"){
console.log(`Hi ${name}, you are moderator`)
}else{
    console.log(`Hi ${name}, I don't know you`)
}

var role = "Admin"
var name = "Jone"
if(role == "Admin"){
    if(name=="Aakash"){
        console.log(`Hi ${name} you are ${role}`)
    }else{
        console.log(`hi ${name} you are unknown`)
    }
}else if(role=="User"){
    if(name=="Aakash"){
        console.log(`Hi ${name} you are ${role}`)
    }else{
        console.log(`hi ${name} you are unknown`)
    }
}

var name = "Sidhanta"
if(name == "Tina" || name == "Santanu"){
    console.log(`Hi ${name}, you are welcome`)
}

// Both condition should match

var name = "Tina"
if(name == "Tina" && role == "Admin"){
    console.log(`Hi ${name}, you are ${role}`)
}

var name = "Santanu"
if(name = "Santanu" && (role=="Admin" || role=="User")){
    console.log(`Hi ${name}, you are ${role}`)
    
}

var a = 1
if(a){
    console.log("hi")
}else{
    console.log("Bie")
}

var a = 0
if(a){
    console.log("hi")   
}else{
    console.log("Bie")
}

var a = -1
if(a){
    console.log("hi")
}else{
    console.log("Bie")
}

// Ternary > single line if else

    var a = 10
    a>10?"hii":"Bie"

    var a = 10
    a==10?a+1:a-1

    // Multiple condition and multiple output(ifelse)
    // One condition and one output(ternary)
    //One condition and multiple output(switch)

    