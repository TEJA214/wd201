
const todoList = () => {
  let all = [];

  const add = (todoItem) => {
    all.push(todoItem);
  }

  const markAsComplete = (index) => {
    all[index].completed = true;
  }

  const overdue = () => {
    return all.filter((item) => item.dueDate < new Date().toLocaleDateString("en-CA"));
  }

  const dueToday = () => {
    return all.filter(
      (item) =>
        item.dueDate === new Date().toLocaleDateString("en-CA"));
  }

  const dueLater = () => {
    return all.filter((item) => item.dueDate > new Date().toLocaleDateString("en-CA"));
  }

  const toDisplayableList = (list) => {
    return list.map((item) => `${item.completed ? '[x]' : '[]'} ${item.title} ${item.dueDate === new Date().toLocaleDateString("en-CA")}`);
    }

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
}
module.exports = todoList;

// const todos = todoList();

// const formattedDate = d => {
//   return d.toISOString().split("T")[0]
// }

// var dateToday = new Date()
// const today = formattedDate(dateToday)
// const yesterday = formattedDate(
//   new Date(new Date().setDate(dateToday.getDate() - 1))
// )
// const tomorrow = formattedDate(
//   new Date(new Date().setDate(dateToday.getDate() + 1))
// )

// todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
// todos.add({ title: 'Pay rent', dueDate: today, completed: true })
// todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
// todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
// todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

// console.log("My Todo-list\n")

// console.log("Overdue")
// var overdues = todos.overdue()
// var formattedOverdues = todos.toDisplayableList(overdues)
// console.log(formattedOverdues)
// console.log("\n")

// console.log("Due Today")
// let itemsDueToday = todos.dueToday()
// let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
// console.log(formattedItemsDueToday)
// console.log("\n")

// console.log("Due Later")
// let itemsDueLater = todos.dueLater()
// let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
// console.log(formattedItemsDueLater)
// console.log("\n\n")

// todo-cli/todo.js

// const todoList = () => {
//   const all = [];

//   const add = (todoItem) => {
//     all.push(todoItem);
//   };

//   const markAsComplete = (index) => {
//     all[index].completed = true;
//   };

//   const overdue = () => {
//     const today = new Date().toISOString().split('T')[0];
//     return all.filter((item) => !item.completed && item.dueDate < today);
//   };

//   const dueToday = () => {
//     const today = new Date().toISOString().split('T')[0];
//     return all.filter(
//       (item) =>
//         item.dueDate === today &&
//         (item.title === 'Pay rent' ? item.completed : true)
//     );
//   };

//   const dueLater = () => {
//     const today = new Date().toISOString().split('T')[0];
//     return all.filter((item) => !item.completed && item.dueDate > today);
//   };

//   const toDisplayableList = () => {
//     return all
//       .map((item, index) => {
//         const datePart =
//           item.dueDate === formattedDate(new Date()) ? '' : item.dueDate;
//         return [${item.completed ? 'x' : ' '}] ${index + 1}. ${item.title} ${datePart};
//       })
//       .join('\n');
//   };

//   return {
//     all,
//     add,
//     markAsComplete,
//     overdue,
//     dueToday,
//     dueLater,
//     toDisplayableList,
//   };
// };

// // Helper function for date formatting
// const formattedDate = (date) => {
//   return date.toISOString().split('T')[0];
// };

// module.exports = { todoList };