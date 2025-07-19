const actors = [
  { name: 'Leonardo DiCaprio', born: 1974 },
  { name: 'Tom Hanks', born: 1956 },
  { name: 'Meryl Streep', born: 1949 },
  { name: 'Brad Pitt', born: 1963 },
  { name: 'Johnny Depp', born: 1963 },
  { name: 'Scarlett Johansson', born: 1984 },
  { name: 'Jennifer Lawrence', born: 1990 },
  { name: 'Denzel Washington', born: 1954 },
  { name: 'Morgan Freeman', born: 1937 },
  { name: 'Cate Blanchett', born: 1969 },
  { name: 'Tom Holland', born: 1998 }
]

function calculateActorsAges(actors) {
  const fecha = new Date()
  const hoy = fecha.getFullYear()
  let actorAge = []
  for (actor of actors) {
    actorAge.push(actor.name, hoy - actor.born)
  }
  return actorAge
}

console.log(calculateActorsAges(actors))
