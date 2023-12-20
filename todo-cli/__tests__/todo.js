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

const { createTodo, markTodoAsCompleted, getOverdueItems, getDueTodayItems, getDueLaterItems } = require('./todo');

test('Create a new todo', () => {
  // Test implementation
});

test('Mark a todo as completed', () => {
  // Test implementation
});

test('Retrieve overdue items', () => {
  // Test implementation
});

test('Retrieve due today items', () => {
  // Test implementation
});

test('Retrieve due later items', () => {
  // Test implementation
});
