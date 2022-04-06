// Code your solution here
function findMatching(listDrivers, nameDriver){
    let newArr = listDrivers.filter( element => element.toUpperCase() == nameDriver.toUpperCase());
    return newArr
}
function fuzzyMatch(listDrivers,nameDriver){
    let newArr = listDrivers.filter(obj => obj.slice(0,2).toUpperCase() === nameDriver.slice(0,2).toUpperCase());
    return newArr
}
function matchName(xlistDrivers,nameDriver){
    let newArr = xlistDrivers.filter(obj => obj['name'] === nameDriver)
    return newArr
}


// let listDrivers = ['Abby','BriLLY', 'cralet']
// findMatching(listDrivers, 'abby')
let xlistDrivers = [
    {name: 'abby', hometown: 'nyc'},
    {name: 'abby', hometown: 'big apple'},
    {name: 'brilly', hometown: 'nyc'}]
[1, 2, 3, 4, 5].filter(function (num) {
  return num > 3;
});
// => [4, 5]
