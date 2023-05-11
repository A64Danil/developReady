interface MyOtherObject {
  id: number
  title: string
  description: string
  isComplete: boolean
  tags: string[]
}

const obj2: MyOtherObject = {
  id: 1,
  title: 'Complete task',
  description: 'Finish the project by Friday',
  isComplete: false,
  tags: ['work', 'project', 'deadline'],
}

const hello = 'all is right, all is good FROM TS 222!!!'
console.log(hello)
