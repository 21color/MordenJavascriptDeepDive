const player: readonly[string, number, boolean] = ["hana", 29, true]; 

const arr = player.filter(string => {
  return string === 'hana';
})
console.log(arr)