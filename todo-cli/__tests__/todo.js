// const todoList = require('../todo');

// const {all, markAsComplete, add} = todoList();
// describe("Todolist Test Suite", () => {
//     beforeAll(() => {
//     add({
//             title: "new todo",
//             completed:false,
//             dueDate: new Date().toLocalDataString("en-CA")
//         });
//       });
//         test ("Should add new todo", () => {
//           const todoItemsCount = all.length;
//           add({
//             title: "Test todo",
//             completed:false,
//             dueDate: new Date().toLocalDataString("en-CA")
//         });
//     expect(all.length).toBe(todoItemsCount + 1);
//  });

//   test("Should mark a todo as complete",() => {
//     expect(all[0].completed).toBe(false);
//     markAsComplete(0);
//     expect(all[0].completed).toBe(true);
//   });
// });


// const todoList = require('../todo');

// const { all, markAsComplete, add } = todoList();

// describe("TodoList Test Suite", () => {
//   beforeAll(() => {
//     add({
//       title: "new todo",
//       completed: false,
//       dueDate: new Date().toLocaleDateString("en-CA")  // Corrected typo here
//     });
//   });

//   test("Should add new todo", () => {
//     const todoItemsCount = all.length;
//     add({
//       title: "Test todo",
//       completed: false,
//       dueDate: new Date().toLocaleDateString("en-CA")  // Corrected typo here
//     });
//     expect(all.length).toBe(todoItemsCount + 1);
//   });

//   test("Should mark a todo as complete", () => {
//     expect(all[0].completed).toBe(false);
//     markAsComplete(0);
//     expect(all[0].completed).toBe(true);
//   });
// });


// todo.test.js

// const { createTodo, markTodoAsCompleted, getOverdueItems, getDueTodayItems, getDueLaterItems } = require('./todo');

// test('Create a new todo', () => {
//   // Test implementation
// });

// test('Mark a todo as completed', () => {
//   // Test implementation
// });

// test('Retrieve overdue items', () => {
//   // Test implementation
// });

// test('Retrieve due today items', () => {
//   // Test implementation
// });

// test('Retrieve due later items', () => {
//   // Test implementation
// });




// __tests__/todo.js

const {
  createTodo,
  markTodoAsCompleted,
  getOverdueItems,
  getDueTodayItems,
  getDueLaterItems,
  toDisplayableList,
} = require('../todo');

describe('Todo functionality', () => {
  let todos;

  beforeEach(() => {
    // Initialize or reset todos before each test
    todos = [];
  });

  test('Create a new todo', () => {
    // Test creating a new todo
    const newTodo = createTodo('Example Todo', '2023-12-21');
    todos.push(newTodo);

    // Assertions
    expect(todos).toHaveLength(1);
    expect(todos[0].title).toBe('Example Todo');
    expect(todos[0].dueDate).toBe('2023-12-21');
    expect(todos[0].completed).toBeFalsy();
  });

  test('Mark a todo as completed', () => {
    // Test marking a todo as completed
    const newTodo = createTodo('Example Todo', '2023-12-21');
    todos.push(newTodo);

    markTodoAsCompleted(todos, newTodo.id);

    // Assertions
    expect(todos[0].completed).toBeTruthy();
  });

  test('Retrieve overdue items', () => {
    // Test retrieving overdue items
    const overdueTodo = createTodo('Overdue Todo', '2022-01-01');
    todos.push(overdueTodo);

    const overdueItems = getOverdueItems(todos);

    // Assertions
    expect(overdueItems).toHaveLength(1);
    expect(overdueItems[0].title).toBe('Overdue Todo');
  });

  test('Retrieve due today items', () => {
    // Test retrieving due today items
    const dueTodayTodo = createTodo('Due Today Todo', '2023-12-20');
    todos.push(dueTodayTodo);

    const dueTodayItems = getDueTodayItems(todos);

    // Assertions
    expect(dueTodayItems).toHaveLength(1);
    expect(dueTodayItems[0].title).toBe('Due Today Todo');
  });

  test('Retrieve due later items', () => {
    // Test retrieving due later items
    const dueLaterTodo = createTodo('Due Later Todo', '2023-12-25');
    todos.push(dueLaterTodo);

    const dueLaterItems = getDueLaterItems(todos);

    // Assertions
    expect(dueLaterItems).toHaveLength(1);
    expect(dueLaterItems[0].title).toBe('Due Later Todo');
  });

  test('Implement toDisplayableList function', () => {
    // Test the toDisplayableList function
    const displayableList = toDisplayableList(todos);

    // Assertions based on the expected format of the displayable list
    // Add more specific assertions based on your implementation
    expect(displayableList).toEqual(expect.arrayContaining([]));
  });
});
