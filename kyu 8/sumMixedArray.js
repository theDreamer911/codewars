// const sumMix = (x) => x.map(e=> Number(e)) 
const sumMix = (x) => x.reduce((a,b) => Number(a) + Number(b)) 

console.log(sumMix([9, 3, '7', '3']));