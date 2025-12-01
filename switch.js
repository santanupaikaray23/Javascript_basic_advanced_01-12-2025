var name = "Eva"

switch(name){
    case 'Santanu':
    console.log(`hi ${name}`)
    break;
    case 'Eva':
    console.log(`hi ${name}`)
    break;
        default:
            console.log(`hi default case`)
    
}

var input = 3

switch(input%2){
    case 0:
        console.log(`Number is even`)
        break;
        case 1:
            console.log(`Number is odd`)
            break;
            default:
                console.log(`hi default case`)
}

switch(new Date().getDay()){
    case 0:
        console.log(`Today is sunday`)
        break;
        case 4:
            console.log(`Today is thursday`)
            break;
            default:
                console.log(`Invalid Input`)
}