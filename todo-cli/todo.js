const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
      const today = new Date().toISOString().split("T")[0];
    return all.filter((item) => !item.completed && item.dueDate < today);
      // Write the date check condition here and return the array
      // of overdue items accordingly.
    }
  
    const dueToday = () => {
      const today = new Date().toISOString().split('T')[0];
          return all.filter(
            (item) =>
              item.dueDate === today &&
              (item.title === 'Pay rent' ? item.completed : true)
          );
    
      // Write the date check condition here and return the array
      // of todo items that are due today accordingly.
    }
  
    const dueLater = () => {
      const today = new Date().toISOString().split("T")[0];
    return all.filter((item) => !item.completed && item.dueDate > today);
    
      // Write the date check condition here and return the array
      // of todo items that are due later accordingly.
    }
  
    const toDisplayableList = (list) => {
     return list
      .map((item, index) => {
        const datePart =
          item.dueDate === formattedDate(new Date()) ? '' : item.dueDate;
        return `[${item.completed ? 'x' : ' '}] ${item.title} ${datePart}`;
      })
      .join('\n');
  };
  
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList
    };
  };
  
  // ####################################### #
  // DO NOT CHANGE ANYTHING BELOW THIS LINE. #
  // ####################################### #
  
  const todos = todoList();
  
  const formattedDate = d => {
    return d.toISOString().split("T")[0]
  }
  
  var dateToday = new Date()
  const today = formattedDate(dateToday)
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  )
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  )
  
  todos.add({ title: 'Submit assignment', dueDate: '2024-01-20', completed: false })
  todos.add({ title: 'Pay rent', dueDate: '2024-01-21', completed: true })
  todos.add({ title: 'Service Vehicle', dueDate: '2024-01-21', completed: false })
  todos.add({ title: 'File taxes', dueDate: '2024-01-22', completed: false })
  todos.add({ title: 'Pay electric bill', dueDate: '2024-01-22', completed: false })
  
  console.log("My Todo-list\n")
  
  console.log("Overdue")
  var overdues = todos.overdue()
  var formattedOverdues = todos.toDisplayableList(overdues)
  console.log(formattedOverdues)
  console.log("\n")
  
  console.log("Due Today")
  let itemsDueToday = todos.dueToday()
  let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
  console.log(formattedItemsDueToday)
  console.log("\n")
  
  console.log("Due Later")
  let itemsDueLater = todos.dueLater()
  let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
  console.log(formattedItemsDueLater)
  console.log("\n\n")