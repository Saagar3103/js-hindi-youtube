const accountId = 144553
let accountEmail = "gbfgaming3103@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur" //do not prefer this way
let accountState;

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "21211"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])