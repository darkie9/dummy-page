
var allUsers = {
    "sdarkie1":{
       "email": "sdarkie9@gmail.com",
       "password": "12n34"
    },
    "sdarkie2":{
        "email": "sdarkie8@gmail.com",
        "password": "1d234"
     },
     "sdarkie3":{
        "email": "sdarkie7@gmail.com",
        "password": "123v4"
     },
     "sdarkie4":{
        "email": "sdarkie6@gmail.com",
        "password": "123j4"
     }
}
// example JSON

// declaring function 
let checkLogin = (email,password,allUsers) => {
    let A = Object.values(allUsers)  // making array A out of allUser values
    console.log(A) 
        // using find() to get the value (object storing datas of the user) of the 1st element if callback agrees
        var a = A.find(hero =>{
        return hero.email == email}); // argument:finding email same as input 
        var b = A.find(hero =>{
       // argument: finding password same as input
        return hero.password == password});
        // using tenary function to validate log in statement 
        var finalUpdate = (a == undefined)?'No user with this email account':((b== undefined)?`You have provided incorrect password`:`You are logged in`)    
        alert(finalUpdate)    
    } // function ends