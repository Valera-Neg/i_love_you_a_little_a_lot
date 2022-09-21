function howMuchILoveYou(nbPetals) {
  const options = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
  return options[(nbPetals - 1) % options.length] 
}

console.log(howMuchILoveYou(7)) //> "I love you"
console.log(howMuchILoveYou(3)) //> "a lot"
console.log(howMuchILoveYou(6)) //> "not at all"
console.log(howMuchILoveYou(12)) //> "not at all"
console.log(howMuchILoveYou(12)) //> "not at all"
console.log(howMuchILoveYou(16)) //> "passionately"