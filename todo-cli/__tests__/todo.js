// // // // // const todoList = require('../todo');

// // // // // const {all, markAsComplete, add} = todoList();
// // // // // describe("Todolist Test Suite", () => {
// // // // //     beforeAll(() => {
// // // // //     add({
// // // // //             title: "new todo",
// // // // //             completed:false,
// // // // //             dueDate: new Date().toLocalDataString("en-CA")
// // // // //         });
// // // // //       });
// // // // //         test ("Should add new todo", () => {
// // // // //           const todoItemsCount = all.length;
// // // // //           add({
// // // // //             title: "Test todo",
// // // // //             completed:false,
// // // // //             dueDate: new Date().toLocalDataString("en-CA")
// // // // //         });
// // // // //     expect(all.length).toBe(todoItemsCount + 1);
// // // // //  });

// // // // //   test("Should mark a todo as complete",() => {
// // // // //     expect(all[0].completed).toBe(false);
// // // // //     markAsComplete(0);
// // // // //     expect(all[0].completed).toBe(true);
// // // // //   });
// // // // // });








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








// // // // // todo.test.js

// // // // // const { createTodo, markTodoAsCompleted, getOverdueItems, getDueTodayItems, getDueLaterItems } = require('./todo');

// // // // // test('Create a new todo', () => {
// // // // //   // Test implementation
// // // // // });

// // // // // test('Mark a todo as completed', () => {
// // // // //   // Test implementation
// // // // // });

// // // // // test('Retrieve overdue items', () => {
// // // // //   // Test implementation
// // // // // });

// // // // // test('Retrieve due today items', () => {
// // // // //   // Test implementation
// // // // // });

// // // // // test('Retrieve due later items', () => {
// // // // //   // Test implementation
// // // // // });




// // // // // __tests__/todo.js

// // // // const {
// // // //   createTodo,
// // // //   markTodoAsCompleted,
// // // //   getOverdueItems,
// // // //   getDueTodayItems,
// // // //   getDueLaterItems,
// // // //   toDisplayableList,
// // // // } = require('../todo');

// // // // describe('Todo functionality', () => {
// // // //   let todos;

// // // //   beforeEach(() => {
// // // //     // Initialize or reset todos before each test
// // // //     todos = [];
// // // //   });

// // // //   test('Create a new todo', () => {
// // // //     // Test creating a new todo
// // // //     const newTodo = createTodo('Example Todo', '2023-12-21');
// // // //     todos.push(newTodo);

// // // //     // Assertions
// // // //     expect(todos).toHaveLength(1);
// // // //     expect(todos[0].title).toBe('Example Todo');
// // // //     expect(todos[0].dueDate).toBe('2023-12-21');
// // // //     expect(todos[0].completed).toBeFalsy();
// // // //   });

// // // //   test('Mark a todo as completed', () => {
// // // //     // Test marking a todo as completed
// // // //     const newTodo = createTodo('Example Todo', '2023-12-21');
// // // //     todos.push(newTodo);

// // // //     markTodoAsCompleted(todos, newTodo.id);

// // // //     // Assertions
// // // //     expect(todos[0].completed).toBeTruthy();
// // // //   });

// // // //   test('Retrieve overdue items', () => {
// // // //     // Test retrieving overdue items
// // // //     const overdueTodo = createTodo('Overdue Todo', '2022-01-01');
// // // //     todos.push(overdueTodo);

// // // //     const overdueItems = getOverdueItems(todos);

// // // //     // Assertions
// // // //     expect(overdueItems).toHaveLength(1);
// // // //     expect(overdueItems[0].title).toBe('Overdue Todo');
// // // //   });

// // // //   test('Retrieve due today items', () => {
// // // //     // Test retrieving due today items
// // // //     const dueTodayTodo = createTodo('Due Today Todo', '2023-12-20');
// // // //     todos.push(dueTodayTodo);

// // // //     const dueTodayItems = getDueTodayItems(todos);

// // // //     // Assertions
// // // //     expect(dueTodayItems).toHaveLength(1);
// // // //     expect(dueTodayItems[0].title).toBe('Due Today Todo');
// // // //   });

// // // //   test('Retrieve due later items', () => {
// // // //     // Test retrieving due later items
// // // //     const dueLaterTodo = createTodo('Due Later Todo', '2023-12-25');
// // // //     todos.push(dueLaterTodo);

// // // //     const dueLaterItems = getDueLaterItems(todos);

// // // //     // Assertions
// // // //     expect(dueLaterItems).toHaveLength(1);
// // // //     expect(dueLaterItems[0].title).toBe('Due Later Todo');
// // // //   });

// // // //   test('Implement toDisplayableList function', () => {
// // // //     // Test the toDisplayableList function
// // // //     const displayableList = toDisplayableList(todos);

// // // //     // Assertions based on the expected format of the displayable list
// // // //     // Add more specific assertions based on your implementation
// // // //     expect(displayableList).toEqual(expect.arrayContaining([]));
// // // //   });
// // // // });

// // // // todo-cli/_tests_/todo.test.js

// // // const { todoList } = require('../todo-cli/todo');

// // // describe('TodoList functionality', () => {
// // //   let myTodoList;

// // //   beforeEach(() => {
// // //     myTodoList = todoList();
// // //   });

// // //   test('A test that checks creating a new todo', () => {
// // //     myTodoList.add({ title: 'New Todo', dueDate: '2023-12-21' });
// // //     expect(myTodoList.all).toHaveLength(1);
// // //     expect(myTodoList.all[0].title).toBe('New Todo');
// // //     expect(myTodoList.all[0].dueDate).toBe('2023-12-21');
// // //     expect(myTodoList.all[0].completed).toBeFalsy();
// // //   });

// // //   test('A test that checks marking a todo as completed', () => {
// // //     myTodoList.add({ title: 'Example Todo', dueDate: '2023-12-21' });
// // //     myTodoList.markAsComplete(0);
// // //     expect(myTodoList.all[0].completed).toBeTruthy();
// // //   });

// // //   test('A test that checks retrieval of overdue items', () => {
// // //     myTodoList.add({ title: 'Overdue Todo', dueDate: '2022-01-01' });
// // //     const overdueItems = myTodoList.overdue();
// // //     expect(overdueItems).toHaveLength(1);
// // //     expect(overdueItems[0].title).toBe('Overdue Todo');
// // //   });

// // //   test('A test that checks retrieval of due today items', () => {
// // //     myTodoList.add({ title: 'Due Today Todo', dueDate: '2023-12-20' });
// // //     const dueTodayItems = myTodoList.dueToday();
// // //     expect(dueTodayItems).toHaveLength(1);
// // //     expect(dueTodayItems[0].title).toBe('Due Today Todo');
// // //   });

// // //   test('A test that checks retrieval of due later items', () => {
// // //     myTodoList.add({ title: 'Due Later Todo', dueDate: '2023-12-25' });
// // //     const dueLaterItems = myTodoList.dueLater();
// // //     expect(dueLaterItems).toHaveLength(1);
// // //     expect(dueLaterItems[0].title).toBe('Due Later Todo');
// // //   });

// // //   test('A test that checks toDisplayableList function', () => {
// // //     myTodoList.add({ title: 'Displayable Todo', dueDate: '2023-12-21' });
// // //     const displayableList = myTodoList.toDisplayableList();
// // //     const expectedOutput = '[ ] 1. Displayable Todo 2023-12-21';
// // //     expect(displayableList).toBe(expectedOutput);
// // //   });
// // // });



// // const { todoList } = require('../todo-cli/todo');

// // const myTodoList = todoList();

// // // Add todo items
// // myTodoList.add({ title: 'Buy groceries', dueDate: '2023-12-31' });
// // myTodoList.add({ title: 'Complete project', dueDate: '2023-12-20' });

// // // Mark an item as complete
// // myTodoList.markAsComplete(0);

// // // Get overdue items
// // const overdueItems = myTodoList.overdue();
// // console.log('Overdue Items:', overdueItems);

// // // Get items due today
// // const dueTodayItems = myTodoList.dueToday();
// // console.log('Due Today Items:', dueTodayItems);

// // // Get items due later
// // const dueLaterItems = myTodoList.dueLater();
// // console.log('Due Later Items:', dueLaterItems);

// // // Display the todo list
// // const displayableList = myTodoList.toDisplayableList();
// // console.log('Todo List:\n', displayableList);


// /* eslint-disable no-undef */
// const db = require("../models");

// const getJSDate = (days) => {
//   if (!Number.isInteger(days)) {
//     throw new Error("Need to pass an integer as days");
//   }
//   const today = new Date();
//   const oneDay = 60 * 60 * 24 * 1000;
//   return new Date(today.getTime() + days * oneDay)
// }

// describe("Tests for functions in todo.js", function () {
//   beforeAll(async () => {
//     await db.sequelize.sync({ force: true })
//   });

//   test("Todo.overdue should return all tasks (including completed ones) that are past their due date", async () => {
// await db.Todo.addTask({ title: "This is a sample item", dueDate: getJSDate(-2), completed: false });

//     const items = await db.Todo.overdue();
//     expect(items.length).toBe(1);
//   });

//   test("Todo.dueToday should return all tasks that are due today (including completed ones)", async () => {
//     const dueTodayItems = await db.Todo.dueToday();
//     await db.Todo.addTask({ title: "This is a sample item", dueDate: getJSDate(0), completed: false });
//     const items = await db.Todo.dueToday();
//     expect(items.length).toBe(dueTodayItems.length + 1);
//   });

//   test("Todo.dueLater should return all tasks that are due on a future date (including completed ones)", async () => {
//     const dueLaterItems = await db.Todo.dueLater();
//     await db.Todo.addTask({ title: "This is a sample item", dueDate: getJSDate(2), completed: false });
//     const items = await db.Todo.dueLater();
//     expect(items.length).toBe(dueLaterItems.length + 1);
//   });

//   test("Todo.markAsComplete should change the `completed` property of a todo to `true`", async () => {
//     const overdueItems = await db.Todo.overdue()
//     const aTodo = overdueItems[0];
//     expect(aTodo.completed).toBe(false);
//     await db.Todo.markAsComplete(aTodo.id);
//     await aTodo.reload();

//     expect(aTodo.completed).toBe(true);
//   })

//   test("For a completed past-due item, Todo.displayableString should return a string of the format `ID. [x] TITLE DUE_DATE`", async () => {
//     const overdueItems = await db.Todo.overdue()
//     const aTodo = overdueItems[0];
//     expect(aTodo.completed).toBe(true);
//     const displayValue = aTodo.displayableString()
//     expect(displayValue).toBe(`${aTodo.id}. [x] ${aTodo.title} ${aTodo.dueDate}`)
//   })

//   test("For an incomplete todo in the future, Todo.displayableString should return a string of the format `ID. [ ] TITLE DUE_DATE`", async () => {
//     const dueLaterItems = await db.Todo.dueLater()
//     const aTodo = dueLaterItems[0];
//     expect(aTodo.completed).toBe(false);
//     const displayValue = aTodo.displayableString()
//     expect(displayValue).toBe(`${aTodo.id}. [ ] ${aTodo.title} ${aTodo.dueDate}`)
//   })

//   test("For an incomplete todo due today, Todo.displayableString should return a string of the format `ID. [ ] TITLE` (date should not be shown)", async () => {
//     const dueTodayItems = await db.Todo.dueToday()
//     const aTodo = dueTodayItems[0];
//     expect(aTodo.completed).toBe(false);
//     const displayValue = aTodo.displayableString()
//     expect(displayValue).toBe(`${aTodo.id}. [ ] ${aTodo.title}`)
//   })

//   test("For a complete todo due today, Todo.displayableString should return a string of the format `ID. [x] TITLE` (date should not be shown)", async () => {
//     const dueTodayItems = await db.Todo.dueToday()
//     const aTodo = dueTodayItems[0];
//     expect(aTodo.completed).toBe(false);
//     await db.Todo.markAsComplete(aTodo.id);
//     await aTodo.reload();
//     const displayValue = aTodo.displayableString()
//     expect(displayValue).toBe(`${aTodo.id}. [x] ${aTodo.title}`)
//   })
// });
// const { todoList } = require('../todo');

// describe("TodoList Test Suite", () => {
//   let { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

//   beforeAll(() => {
//     // Add a sample todo with a due date
//     add({
//       title: "Sample Todo",
//       completed: false,
//       dueDate: new Date().toLocaleDateString("en-CA"),
//     });
//   });

//   test("Should add new todo", () => {
//     const todoItemsCount = all.length;
//     add({
//       title: "Test todo",
//       completed: false,
//       dueDate: new Date().toLocaleDateString("en-CA"),
//     });
//     expect(all.length).toBe(todoItemsCount + 1);
//   });

//   test("Should mark a todo as complete", () => {
//     expect(all[0].completed).toBe(false);
//     markAsComplete(0);
//     expect(all[0].completed).toBe(true);
//   });

//   // Test to retrieve overdue items
//   test("Should retrieve overdue items", () => {
//     const overdueItems = overdue();
//     expect(overdueItems.length).toBe(1); // Modify based on your logic
//     expect(overdueItems[0].title).toBe("Sample Todo"); // Assuming the sample todo is overdue
//   });

//   // Test to retrieve due today items
//   test("Should retrieve due today items", () => {
//     const todayItems = dueToday();
//     expect(todayItems.length).toBe(1); // There is one sample todo due today
//     expect(todayItems[0].title).toBe("Sample Todo"); // Assuming the sample todo is due today
//   });

//   // Test to retrieve due later items
//   test("Should retrieve due later items", () => {
//     // Add a new todo with a future due date
//     add({
//       title: "Future Todo",
//       completed: false,
//       dueDate: new Date(new Date().getTime() + 86400000 * 3).toLocaleDateString("en-CA"), // 3 days later
//     });

//     const laterItems = dueLater();
//     expect(laterItems.length).toBe(1); // Assuming there is one todo due later
//     expect(laterItems[0].title).toBe("Future Todo"); // Modify based on your logic
//   });
// });

const { todoList } = require('../todo');

describe("TodoList Test Suite", () => {
  let { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

  beforeAll(() => {
    // Add a sample todo with a due date
    add({
      title: "Sample Todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("Should add new todo", () => {
    const todoItemsCount = all.length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(todoItemsCount + 1);
  });

  test("Should mark a todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  // Test to retrieve overdue items
  test("Should retrieve overdue items", () => {
    const overdueItems = overdue();
    expect(overdueItems.length).toBe(1); // Modify based on your logic
    expect(overdueItems[0].title).toBe("Sample Todo"); // Assuming the sample todo is overdue
  });

  // Test to retrieve due today items
  test("Should retrieve due today items", () => {
    const todayItems = dueToday();
    expect(todayItems.length).toBe(1); // There is one sample todo due today
    expect(todayItems[0].title).toBe("Sample Todo"); // Assuming the sample todo is due today
  });

  // Test to retrieve due later items
  test("Should retrieve due later items", () => {
    // Add a new todo with a future due date
    add({
      title: "Future Todo",
      completed: false,
      dueDate: new Date(new Date().getTime() + 86400000 * 3).toLocaleDateString("en-CA"), // 3 days later
    });

    const laterItems = dueLater();
    expect(laterItems.length).toBe(1); // Assuming there is one todo due later
    expect(laterItems[0].title).toBe("Future Todo"); // Modify based on your logic
  });
});
