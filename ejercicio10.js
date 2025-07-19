const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
}

function getCapital(country) {
  let objeto = {}
  let ciudad
  if (capitals[country]) {
    ciudad = capitals[country]
    objeto = { country, ciudad }
    return objeto
  } else {
    return `La capital de ${country} no se encuentra en el listado.`
  }
}

console.log(getCapital('Germany'))
console.log(getCapital('France'))
console.log(getCapital('Ecuador'))
