import './styles/main.scss'

console.log('entry point 223')

// создание свойства класса без конструктора
// eslint-disable-next-line no-unused-vars
class Game {
  // name = 'Violin Charades'
  // name: 'Violin Charades'
}
// new Game();
// console.log(myGame);

console.log('12-33')

// eslint-disable-next-line no-unused-vars
function bad(a) {
  console.log('WHYYYYYY?????!?!?!?!?!')
  return a + 2
}

const a2 = 5

console.log(a2)

const testObj = {
  one: 'odin',
  two: 'dva',
  three: 'tri',
}

// eslint-disable-next-line no-restricted-syntax
// for (const key of testObj) {
//   console.log(`${key}:${testObj[key]}`) // fixed by eslint
// }

const { one } = testObj

console.log(one)
