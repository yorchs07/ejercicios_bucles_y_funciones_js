const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Emma Frost', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' },
  { name: 'Quicksilver', power: 'super speed' }
]

function findMutantByPower(mutants, power) {
  let hero = []
  for (const x of mutants) {
    if (x.power === power) {
      hero.push(x)
    }
  }
  if (hero.length > 0) {
    return hero
  } else {
    return `El poder: ${power} no está contemplado en la lista.`
  }
}

console.log(findMutantByPower(mutants, 'telepathy'))
console.log(findMutantByPower(mutants, 'super speed'))
console.log(findMutantByPower(mutants, 'invisibility'))
