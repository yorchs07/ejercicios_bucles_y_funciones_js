const movies = [
  { title: 'Inception', duration: 148 },
  { title: 'The Dark Knight', duration: 152 },
  { title: 'Interstellar', duration: 169 },
  { title: 'Dunkirk', duration: 106 },
  { title: 'The Prestige', duration: 130 },
  { title: 'Memento', duration: 113 },
  { title: 'Batman Begins', duration: 140 },
  { title: 'The Dark Knight Rises', duration: 164 },
  { title: 'Tenet', duration: 150 },
  { title: 'Insomnia', duration: 118 }
]

function averageMovieDuration(movies) {
  let suma = 0
  if (movies.length != 0) {
    for (let i = 0; i < movies.length; i++) {
      suma += movies[i].duration
    }
    return suma / movies.length
  } else {
    return 'Son necesarios datos para calcular.'
  }
}
let on = []

console.log(averageMovieDuration(movies))
