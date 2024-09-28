const accountId=123232;
let accountEmail= "varunvmantri@gmail.com"
var accountPass="2343"
accountCity= "Nagpur"
let accountState;

//accountId=23 cannot change constant

accountEmail="hc@gmail.com"
accountPass="56545"
accountCity="Jaipur"

console.log(accountId);

console.table([accountEmail,accountId,accountPass,accountCity,accountState])


/* Prefer not to use var 
coz the issue in block scope and funcitonal scope*/