const accountId = 12345
let accountEmail="xyz@google.com"
var accountPass= "126789"
accountCity= "Jaipur"
let accountState

// accountId= 2 not allowed as const value can never be changed

accountEmail= "newemail@google.com"
accountPass= "yayaya123"
accountCity= "blore"
console.table([accountId, accountEmail, accountPass, accountCity, accountState])

/*
prefer not to use var as a keyword while declaring variables 
because of issue in block scope and functional scope 
*/ 