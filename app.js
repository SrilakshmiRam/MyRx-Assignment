let myArray=[-12,-8,-7,-5,2,4,5,11,15]

let squaresArray=myArray.map(each=>each*each)

let sortedArray=squaresArray.sort((a,b)=> a-b)

console.log(sortedArray)

