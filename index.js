// code your solution here
function saturdayFun(activity='roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(sth="go to the office"){
    return `This Monday, I will ${sth}.`;
}

// function wrapAdjective (){

// const wrapAdjective = function (){
//     return function inner (par="special"){
//         return function inner2(){
//             return ``
//         }
//     }
// }

const wrapAdjective = function(string="*"){
    return function inner (par = "special"){
        return `You are ${string}${par}${string}!`
    }
}