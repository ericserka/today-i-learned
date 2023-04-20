enum TodoStatus {
  DONE = 'done',
  INPROGRESS = 'in-progress',
  TODO = 'todo',
}

interface TodoItem {
  id: number
  title: string
  status: TodoStatus
  completedOn?: Date
}

const todoItems: TodoItem[] = [
  {
    id: 1,
    title: 'Learn HTML',
    status: TodoStatus.DONE,
    completedOn: new Date('2021-09-11'),
  },
  { id: 2, title: 'Learn TypeScript', status: TodoStatus.INPROGRESS },
  { id: 3, title: 'Write the best app in the world', status: TodoStatus.TODO },
]

// no need to specify the return type explicitly as it is already implied that it will be a TodoItem
function addTodoItem(todo: string) {
  const id = getNextId(todoItems)

  const newTodo: TodoItem = {
    id,
    title: todo,
    status: TodoStatus.TODO,
  }

  todoItems.push(newTodo)

  return newTodo
}

// no need to specify the return type explicitly as it is already implied that it will be a number
function getNextId<T extends { id: number }>(items: T[]) {
  return items.reduce((max, x) => (x.id > max ? x.id : max), 0) + 1
}

// generics in arrow function
// const getNextId = <T extends {id: number},>(items: T[]) => items.reduce((max, x) => (x.id > max ? x.id : max), 0) + 1

const newTodo = addTodoItem(
  'Buy lots of stuff with all the money we make from the app'
)

console.log(JSON.stringify(newTodo))
